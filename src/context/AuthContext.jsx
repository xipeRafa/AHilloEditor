import { createContext, useState } from "react";

import { authApp } from "../firebase/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { firestoreDB } from '../firebase/firebaseConfig';

import { collection, addDoc } from 'firebase/firestore'

export const AuthContext = createContext();





const AuthProvider = (props) => {

 

    const register = async (authApp, email, password) => {

        try {

            await createUserWithEmailAndPassword(authApp, email, password);
            login(authApp, email, password);

        } catch (error) {

            console.error("code", error.code);

            const errorObj = {
                "auth/email-already-in-use": () => alert("El Correo ya esta en Uso"),
                "auth/operation-not-allowed": () =>alert("Operacion No Permitida."),
                "auth/weak-password": () => alert("La contraseña es muy débil."),
                "auth/invalid-email": () => alert("El Correo No es Valido"),
            };

            const myswithFunction = (errorCode) => {
                errorObj[errorCode]();
            };

            myswithFunction(error.code);
        }

    };




    const [stateLogout, setStateLogout] = useState(true);


    const login = (authApp, email, password) => {

        signInWithEmailAndPassword(authApp, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                localStorage.setItem("userEmailLS", user.email);
                setStateLogout(!stateLogout);
                location.reload();

            }).catch((error) => {

                console.log(error.code);
                console.log(error.message);

                const errorObj = {
                  "auth/operation-not-allowed": () => alert("Operacion No Permitida."),
                  "auth/invalid-credential": () => alert("Contraseña o Correo son Incorrrectos."),
                  "auth/invalid-email": () => alert("El Correo No es Valido"),
                };

                const mySwithFunction = (errorCode) => {
                  errorObj[errorCode]()
                }

                mySwithFunction(error.code)

            });

    };




    const logout = () => {
        localStorage.removeItem("Done");
        signOut(authApp);
        localStorage.removeItem("userEmailLS");
        setStateLogout(!stateLogout);
    };




    const saveCat = (postBody) => {
        console.log(postBody)

        const postCollectionCat = collection(firestoreDB, 'catAuctions');

        addDoc(postCollectionCat, postBody)
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => { 
                console.log('saveCat Error, AuthContext.jsx, linea 105')
                console.log(error)
            })

    }




    return (
        <AuthContext.Provider
            value={{
                register,
                login,
                logout,
                stateLogout,
                saveCat
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
