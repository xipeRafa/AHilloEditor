import { useContext } from "react";
import logoImg from "../assets/canal10.png";

import { LoginComp } from "./LoginComp";
import { RegisterComp } from "./RegisterComp";

import { AuthContext } from "../context/AuthContext";

export const NavComp = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("Done");

        setTimeout(() => {
            logout();
        }, 500);
    };

    return (
        <nav className="container navbar navbar-light">

            <div className="w-100 d-flex justify-content-center">
                <div className="navbar-brand mb-4">
                   <a href="https://api.whatsapp.com/send?phone=526621891032&text=Linea de Soporte Directorio Arquidiócesis de Hermosillo" target='_blank' style={{textDecoration:'none'}}>
                  {/*<img className='whatsapp' src={whatsapp} alt="whatsapp" />*/} 
                  <p style={{fontSize:'24px'}}>Soporte Técnico  📲</p>
              </a>
                    <img src={logoImg} alt="logo" height="140" />

             
                </div>
            </div>

            <div className="w-100 d-flex justify-content-center">
                <div className="mb-4">

                    {localStorage.getItem("userEmailLS") !== null ? (
                        <>

                            <button className="btn btn-secondary mx-2 disabled">
                                {localStorage.getItem("userEmailLS")}
                            </button>

                            <button onClick={() => {
                                        if (window.confirm(`Quieres Salir?`)) {
                                            handleLogout()
                                        }
                                    }}
                                    className="btn btn-outline-secondary mx-2"
                            >
                                SALIR
                            </button>

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
