import { useContext } from 'react';
import logoImg from '../assets/canal10.png';

import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

import { AuthContext } from '../context/AuthContext';

export const NavComp = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="container navbar navbar-light">
      <div className="w-100 d-flex justify-content-center">
        <div className="navbar-brand mb-4">
          <img src={logoImg} alt="logo" height="140" />
        </div>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <div className="mb-4">
          {localStorage.getItem('userEmailLS') !== null ? (
            <>
              <div className="btn btn-secondary mx-2 disabled">
                {localStorage.getItem('userEmailLS')}
              </div>
              <div
                onClick={() => logout()}
                className="btn btn-outline-secondary mx-2"
              >
                SALIR
              </div>
            </>
          ) : (
            <>
              <LoginComp />
              <RegisterComp />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
