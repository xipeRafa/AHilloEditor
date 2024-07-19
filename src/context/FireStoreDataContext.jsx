import { createContext, useState, useEffect } from 'react';

import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
  query,
} from 'firebase/firestore';

import { firestoreDB, storageDocs } from '../firebase/firebaseConfig';

import {
  ref,
  uploadBytes,
  getBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

export const FireStoreDataContext = createContext();

const FireStoreDataProvider = (props) => {
  const [items, setItems] = useState([]);
console.log(items)
  const itemCollection = query(
    collection(firestoreDB, 'auctions'),
    where('email', '==', localStorage.getItem('userEmailLS'))
  );

  const postCollection = collection(firestoreDB, 'auctions');

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getDocs(itemCollection)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No results!');
          localStorage.removeItem("Done");
        }

        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(documents);
      })
      .catch((err) => {
        console.log('Error searching items', err);
      });

    isMounted = false;
  }, [toggle]);

  //============================= images functions ===========================//

  const handleFileAdd = (selectedFile, postBody) => {
    const filesFolderRef = ref(
      storageDocs,
      `projectFiles/${selectedFile?.name}`
    );
    uploadBytes(filesFolderRef, selectedFile)
      .then(() => {
        getDownloadURL(filesFolderRef).then((url) => {
          postBody.imgName = selectedFile.name;
          postBody.imgUrl = url;
          addDoc(postCollection, postBody);
          setToggle(!toggle);
        });
      })
      .catch((error) => console.log(error));
  };

  //============================= images functions end ===========================//

  const deleteById = async (id, imgName) => {
    const aDoc = doc(firestoreDB, 'auctions', id);
    try {
      await deleteDoc(aDoc);

      const desertRef = ref(storageDocs, `projectFiles/${imgName}`);

      deleteObject(desertRef)
        .then(() => {
          console.log(imgName, 'se elimino de Storage');
        })
        .catch((error) => {
          console.log('ocurrio un error: ', error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const UpdateById = async (id, obj) => {
    const aDoc = doc(firestoreDB, 'auctions', id);
    try {
      await updateDoc(aDoc, obj);
    } catch (error) {
      console.error(error);
    }
  };

  const [editingState, setEditingState]=useState(null)

  const editInfo=(item)=>{
    setEditingState(item)
  }



  const changeImg = (selectedFile, imgName) => {

    const filesFolderRef = ref(
      storageDocs,
      `projectFiles/${imgName}`
    );

    uploadBytes(filesFolderRef, selectedFile)
      .then(() => {
        getDownloadURL(filesFolderRef).then((url) => {
          setToggle(!toggle);
        });
      })
      .catch((error) => console.log(error));

  };



  return (
    <FireStoreDataContext.Provider
      value={{
        items,
        deleteById,
        UpdateById,
        handleFileAdd,
        postCollection,
        setToggle,
        toggle,
        editInfo,
        editingState,
        setEditingState,
        changeImg

      }}
    >
      {props.children}
    </FireStoreDataContext.Provider>
  );
};

export default FireStoreDataProvider;
