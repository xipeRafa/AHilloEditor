import { createContext, useState } from 'react';

import { authApp } from '../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = (props) => {

  const register = async (authApp, email, password) => {
    try {
      await createUserWithEmailAndPassword(authApp, email, password);
      login(authApp, email, password);
    } catch (error) {
      console.error('code', error.code);

        if (error.code == "auth/email-already-in-use") {
              alert("El Correo ya esta en Uso");

        } else if (error.code == "auth/invalid-email") {
              alert("El Correo No es Valido");

        } else if (error.code == "auth/operation-not-allowed") {
              alert("Operacion No Permitida.");

        } else if (error.code == "auth/weak-password") {
              alert("La contraseña es muy débil.");
        }
    }
  };



  const [stateLogout, setStateLogout] = useState(true);

  const login = (authApp, email, password) => {
    signInWithEmailAndPassword(authApp, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem('userEmailLS', user.email);
        setStateLogout(!stateLogout);
        location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logout = () => {
    localStorage.removeItem("Done");
    signOut(authApp);
    localStorage.removeItem('userEmailLS');
    setStateLogout(!stateLogout);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        stateLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
