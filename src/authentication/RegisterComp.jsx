import { Button, Form, Modal, Alert } from "react-bootstrap";
import { useContext, useRef, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { authApp } from "../firebase/firebaseConfig";


export const RegisterComp = () => {
    const { register, saveCat } = useContext(AuthContext);

    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState("");

   
    const emailRef = useRef();
    const passwordRef = useRef();
    const cmfPasswordRef = useRef();

    const openForm = () => { setShowForm(true) }

    const closeForm = () => {
        setError("");
        setShowForm(false)
    }

    const submitForm = (e) => {

        e.preventDefault();

        setError(""); 

        if (passwordRef.current.value !== cmfPasswordRef.current.value) {
                setError("Claves No son iguales.");
                return
        }

        if (passwordRef.current.value.length < 6) {
                setError("Claves es muy corta Use 6 caracteres Minimo");
                return
        }

        register(authApp, emailRef.current.value, passwordRef.current.value)

        saveCat({email : emailRef.current.value, clave: passwordRef.current.value})

        localStorage.removeItem("Done");

        closeForm();
        
    };





    return (
        <>
            <div onClick={openForm} className="btn btn-outline-secondary mx-2">
                Registro
            </div>

            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>

                    <Modal.Header>
                        <Modal.Title>Registro</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirmar Password</Form.Label>
                            <Form.Control type="password" required ref={cmfPasswordRef}/>
                        </Form.Group>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}> Cancelar </Button>
                        <Button variant="primary" type="submit"> Registro </Button>
                    </Modal.Footer>

                </form>
            </Modal>

        </>
    );
};
