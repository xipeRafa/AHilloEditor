import { Button, Form, Modal, Alert } from "react-bootstrap";
import { useContext, useRef, useState } from "react";

import { authApp } from "../firebase/firebaseConfig";

import { AuthContext } from "../context/AuthContext";




export const LoginComp = () => {

    const { login } = useContext(AuthContext);

    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const openForm = () => setShowForm(true)

    const closeForm = () => {
        setError("");
        setShowForm(false)
    }

console.log(emailRef.current?.value.length)

    const submitForm = (e) => {

        e.preventDefault(); 

        if (emailRef.current.value.length === 0) {
                setError("Correo Vacio.");
                return
        }

        if (passwordRef.current.value.length === 0) {
                setError("Clave No Escrita Aun");
                return
        }

        if (passwordRef.current.value.length < 6) {
                setError("Claves es muy corta Use 6 caracteres Minimo");
                return
        }

        login(authApp, emailRef.current.value, passwordRef.current.value)

        localStorage.removeItem("Done");
        
        closeForm()

    }



    return (
        <>
            <div onClick={openForm} className="btn btn-outline-secondary mx-2">
                Entrar
            </div>

            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>

                    <Modal.Header>
                        <Modal.Title>Entrar</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form.Group>
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email"  ref={emailRef} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  ref={passwordRef}/>
                        </Form.Group>

                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}> Cancelar </Button>
                        <Button variant="primary" type="submit">         Entrar </Button>
                    </Modal.Footer>

                </form>
            </Modal>

        </>
    );
};
