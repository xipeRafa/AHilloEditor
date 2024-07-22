import { FireStoreDataContext } from "../../context/FireStoreDataContext";
import { useContext, useEffect, useState } from "react";
import {
    Button,
    Form,
    Modal,
    Alert,
    Row,
    Col /* , Select */,
} from "react-bootstrap";

import Resizer from "react-image-file-resizer";

/*const onChange = async (event) => {
  try {
    const file = event.target.files[0];
    const image = await resizeFile(file);
    console.log(image);
  } catch (err) {
    console.log(err);
  }
}*/

export const AddAuction = () => {
    const {
        handleFileAdd,
        editingState,
        setEditingState,
        UpdateById,
        toggle,
        setToggle,
        changeImg,
    } = useContext(FireStoreDataContext);

    useEffect(() => {
        if (editingState !== null) {
            setInformeState(editingState);

            let centersKeys = Object.keys(editingState.centros).sort();

            let arr1 = [];
            let arr2 = [];
            let arr3 = [];
            let arr4 = [];
            let arr5 = [];
            let arr6 = [];
            let arr7 = [];
            let arr8 = [];
            let arr9 = [];
            let arr10 = [];
            let arr11 = [];
            let arr12 = [];

            let arrTotal = [arr1];

            centersKeys.map((el, i) => {
                if (i <= 2) {
                    arr1.push(el);
                }
                if (i >= 3 && i <= 5) {
                    arr2.push(el);
                }
                if (i >= 6 && i <= 8) {
                    arr3.push(el);
                }
                if (i >= 9 && i <= 11) {
                    arr4.push(el);
                }
                if (i >= 12 && i <= 14) {
                    arr5.push(el);
                }
                if (i >= 15 && i <= 17) {
                    arr6.push(el);
                }

                if (i >= 18 && i <= 20) {
                    arr7.push(el);
                }
                if (i >= 21 && i <= 23) {
                    arr8.push(el);
                }
                if (i >= 25 && i <= 26) {
                    arr9.push(el);
                }
                if (i >= 27 && i <= 29) {
                    arr10.push(el);
                }
                if (i >= 30 && i <= 32) {
                    arr11.push(el);
                }
                if (i >= 33 && i <= 35) {
                    arr12.push(el);
                }
            });

            if (arr2.length > 2) {
                arrTotal.push(arr2);
            }

            if (arr3.length > 2) {
                arrTotal.push(arr3);
            }

            if (arr4.length > 2) {
                arrTotal.push(arr4);
            }

            if (arr5.length > 2) {
                arrTotal.push(arr5);
            }

            if (arr6.length > 2) {
                arrTotal.push(arr6);
            }

            if (arr7.length > 2) {
                arrTotal.push(arr7);
            }

            if (arr8.length > 2) {
                arrTotal.push(arr8);
            }

            if (arr9.length > 2) {
                arrTotal.push(arr9);
            }

            if (arr10.length > 2) {
                arrTotal.push(arr10);
            }

            if (arr11.length > 2) {
                arrTotal.push(arr11);
            }

            if (arr12.length > 2) {
                arrTotal.push(arr12);
            }

            setArrCentersState(arrTotal);

            let gruposKeys = Object.keys(editingState.grupos).sort();

            let arr1Grupos = [];
            let arr2Grupos = [];
            let arr3Grupos = [];
            let arr4Grupos = [];
            let arr5Grupos = [];
            let arr6Grupos = [];
            let arr7Grupos = [];
            let arr8Grupos = [];
            let arr9Grupos = [];
            let arr10Grupos = [];
            let arr11Grupos = [];
            let arr12Grupos = [];

            let arrTotalGrupos = [arr1Grupos];

            gruposKeys.map((el, i) => {
                if (i <= 2) {
                    arr1Grupos.push(el);
                }
                if (i >= 3 && i <= 5) {
                    arr2Grupos.push(el);
                }
                if (i >= 6 && i <= 8) {
                    arr3Grupos.push(el);
                }
                if (i >= 9 && i <= 11) {
                    arr4Grupos.push(el);
                }
                if (i >= 12 && i <= 14) {
                    arr5Grupos.push(el);
                }
                if (i >= 15 && i <= 17) {
                    arr6Grupos.push(el);
                }

                if (i >= 18 && i <= 20) {
                    arr7Grupos.push(el);
                }
                if (i >= 21 && i <= 23) {
                    arr8Grupos.push(el);
                }
                if (i >= 25 && i <= 26) {
                    arr9Grupos.push(el);
                }
                if (i >= 27 && i <= 29) {
                    arr10Grupos.push(el);
                }
                if (i >= 30 && i <= 32) {
                    arr11Grupos.push(el);
                }
                if (i >= 33 && i <= 35) {
                    arr12Grupos.push(el);
                }
            });

            if (arr2Grupos.length > 2) {
                arrTotalGrupos.push(arr2Grupos);
            }

            if (arr3Grupos.length > 2) {
                arrTotalGrupos.push(arr3Grupos);
            }

            if (arr4Grupos.length > 2) {
                arrTotalGrupos.push(arr4Grupos);
            }

            if (arr5Grupos.length > 2) {
                arrTotalGrupos.push(arr5Grupos);
            }

            if (arr6Grupos.length > 2) {
                arrTotalGrupos.push(arr6Grupos);
            }

            if (arr7Grupos.length > 2) {
                arrTotalGrupos.push(arr7Grupos);
            }

            if (arr8Grupos.length > 2) {
                arrTotalGrupos.push(arr8Grupos);
            }

            if (arr9Grupos.length > 2) {
                arrTotalGrupos.push(arr9Grupos);
            }

            if (arr10Grupos.length > 2) {
                arrTotalGrupos.push(arr10Grupos);
            }

            if (arr11Grupos.length > 2) {
                arrTotalGrupos.push(arr11Grupos);
            }

            if (arr12Grupos.length > 2) {
                arrTotalGrupos.push(arr12Grupos);
            }

            setArrCentersState2(arrTotalGrupos);

            setStateObjCenters(editingState.centros);
            setStateObjCenters2(editingState.grupos);

            openForm();
        }

       /*  if (editingState === null) {
            handleCancelar();
        } */
    }, [editingState]);

    const [img, setImg] = useState();

    const [spinnerState, setSpinnerState]=useState(false)

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                600,
                600,
                "JPEG",
                120,
                0,
                (uri) => {
                  //console.log(uri);
                    resolve(uri);
                },
                "base64",
            );
        });

    const onResize = async (event) => {
        const file = event.target.files[0];

        localStorage.setItem("urlImgLS", URL.createObjectURL(file));

        const image = await resizeFile(file);

        fetch(image)
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File([blob], Date.now() + ".jpeg", {
                    type: "image/jpeg",
                });
                setImg(file);
            });

            setSpinnerState(true)
            setTimeout(()=>{
                setSpinnerState(false)
            },4000)
    };

    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState("");

    const [informeState, setInformeState] = useState({
        nombre: "",
        clasificacion: "",
        vicario: "",
        parroco: "",
        decanato: "",
        direccion: "",
        telefono: "",
        oficina: "",
        sitioWeb: "",

        imgUrl: "",

        horarioDeMisasLunes: "",

        horarioDeMisasMartes: "",
        horarioDeMisasMiercoles: "",
        horarioDeMisasJueves: "",
        horarioDeMisasViernes: "",

        horarioDeMisasSabado: "",
        horarioDeMisasDomingo: "",

        catesismoAdultos: "",
        catesismoNinos: "",

        confesiones: "",

        preMatrimoniales: "",
        preBautismales: "",

        eventos: "",
        fiestaPatronal: "",

        comentarios: "",
    });

    const formChange = (e) => {
        setInformeState({ ...informeState, [e.target.name]: e.target.value });
    };

    const {
        nombre,
        clasificacion,
        vicario,
        parroco,

        decanato,
        direccion,
        telefono,
        oficina,
        sitioWeb,

        imgUrl,

        horarioDeMisasLunes,

        horarioDeMisasMartes,
        horarioDeMisasMiercoles,
        horarioDeMisasJueves,
        horarioDeMisasViernes,

        horarioDeMisasSabado,
        horarioDeMisasDomingo,

        catesismoAdultos,
        catesismoNinos,

        confesiones,

        preMatrimoniales,
        preBautismales,

        eventos,
        fiestaPatronal,
        comentarios,
    } = informeState;

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    const handleCancelar = () => {
        setEditingState(null);

        setInformeState({
            nombre: "",
            clasificacion: "",
            vicario: "",
            parroco: "",
            decanato: "",
            direccion: "",
            telefono: "",
            oficina: "",
            sitioWeb: "",

            horarioDeMisasLunes: "",

            horarioDeMisasMartes: "",
            horarioDeMisasMiercoles: "",
            horarioDeMisasJueves: "",
            horarioDeMisasViernes: "",

            horarioDeMisasSabado: "",
            horarioDeMisasDomingo: "",

            catesismoAdultos: "",
            catesismoNinos: "",

            confesiones: "",

            preMatrimoniales: "",
            preBautismales: "",

            eventos: "",
            fiestaPatronal: "",

            comentarios: "",
        });

        setStateObjCenters2({
            "1a_Grupo_1": "",
            "1b_Horario_Grupo_1": "",
            "1c_Direccion_Grupo_1": "",
        });

        setStateObjCenters({
            "1_Centro_1": "",
            "1_Horario_Centro_1": "",
            "1_Direccion_Centro_1": "",
        });

        closeForm();
        console.log('cancelar')
    };

    const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

    //============================================================================================================//

    const [stateObjCenters, setStateObjCenters] = useState({
        "1_Centro_1": "",
        "1_Horario_Centro_1": "",
        "1_Direccion_Centro_1": "",
    });


    const handleInputChange = (e) => {
        setStateObjCenters({
            ...stateObjCenters,
            [e.target.name]: e.target.value,
        });
    };

    const [arrCentersState, setArrCentersState] = useState([
        ["1_Centro_1", "1_Horario_Centro_1", "1_Direccion_Centro_1"],
    ]);

    // arrCentersState.map((el, i)=>{
    //   console.log(el[arrCentersState.length+1])
    // })



    const handleAddObject = () => {
     


      // localStorage.setItem('lastKey', localStorage.lastKey)
      // let a = Number(localStorage.lastKey) + 1
      // localStorage.setItem('lastKey', JSON.stringify(a))
      // let counter = String(a)

let a = Number(arrCentersState[arrCentersState.length-1][2].slice(-2).replace("_", '')) + Number(1) 
let counter = String(a)

        let newKeyCenter = counter.concat("_Centro_".concat(counter))
        let newKeyHorario = counter.concat("_Horario_Centro_".concat(counter))
        let newKeyDireccion = counter.concat("_Direccion_Centro_".concat(counter))

        stateObjCenters[newKeyCenter] = "";
        stateObjCenters[newKeyHorario] = "";
        stateObjCenters[newKeyDireccion] = "";

        setArrCentersState([...arrCentersState, [newKeyCenter, newKeyHorario, newKeyDireccion]]);
    };

    //============================================================================================================//

    const [stateObjCenters2, setStateObjCenters2] = useState({
        "1a_Grupo_1": "",
        "1b_Horario_Grupo_1": "",
        "1c_Direccion_Grupo_1": "",
    });

    console.log(stateObjCenters2)

    const handleInputChange2 = (e) => {
        setStateObjCenters2({
            ...stateObjCenters2,
            [e.target.name]: e.target.value,
        });
    };

    const [arrCentersState2, setArrCentersState2] = useState([
        ["1a_Grupo_1", "1b_Horario_Grupo_1", "1c_Direccion_Grupo_1"],
    ]);



    const handleAddObject2 = () => {

      let a = Number(arrCentersState2[arrCentersState2.length-1][2].slice(-2).replace("_", '')) + Number(1) 
      let counter = String(a)

        let newKeyGrupo2 = counter.concat("a_Grupo_".concat(counter));
        let newKeyHorario2 = counter.concat("b_Horario_Grupo_".concat(counter));
        let newKeyDireccion2 = counter.concat("c_Direccion_Grupo_".concat(counter));

        stateObjCenters2[newKeyGrupo2] = "";
        stateObjCenters2[newKeyHorario2] = "";
        stateObjCenters2[newKeyDireccion2] = "";

        setArrCentersState2([
            ...arrCentersState2,
            [newKeyGrupo2, newKeyHorario2, newKeyDireccion2],
        ]);


    };

    //============================================================================================================//

    //============================================================================================================//

    //============================================================================================================//

    //============================================================================================================//

    //============================================================================================================//

    const submitForm = async (e) => {
        e.preventDefault();
        setError("");

        //(!imgTypes.includes(itemImage.current?.files[0].type)) {
        //return setError('por favor use una imagen valida (png, jpeg, jpg)');
        //}

        let currentDate = new Date();

        let dueDate = currentDate.setHours(
            currentDate.getHours() /* + itemDuration.current.value */,
        );

        informeState.email = localStorage.getItem("userEmailLS");
        informeState.duration = dueDate;
        informeState.centros = stateObjCenters;
        informeState.grupos = stateObjCenters2;

        if (editingState !== null) {
            //editar

            UpdateById(informeState.id, informeState);

            if (img !== undefined) {
                changeImg(img, informeState.imgName);
            }

            setEditingState(null);

            setTimeout(() => {
                setToggle(!toggle);
            }, 1000);
        } else {
            //crear ===>>>>>

            if (img !== undefined) {
                handleFileAdd(img, informeState);

                setTimeout(() => {
                    setToggle(!toggle);
                }, 1000);
            } else {
                if (window.confirm("Seleccione la Primer Foto Por Favor")) {
                    setTimeout(() => {
                        openForm();
                        localStorage.removeItem("Done");
                    }, 1000);
                } else {
                    setTimeout(() => {
                        localStorage.removeItem("Done");
                        location.reload();
                    }, 1000);
                }
            }
        }

        closeForm();

        localStorage.setItem("Done", "gracias-AddAuction");
    }; // submit

    //============================================================================================================//

    //============================================================================================================//

    //============================================================================================================//

    //============================================================================================================//

    //============================================================================================================//

    const handleDeleteCenter = (Name, Direccion, Horario) => {
        delete stateObjCenters[Name];
        delete stateObjCenters[Direccion];
        delete stateObjCenters[Horario];

        setStateObjCenters(stateObjCenters);

        let toDelete = Name.slice(-2).replace("_", '')

        arrCentersState.map((el, i) => {

            let target = el[0].slice(-2).replace("_", '')
            
            if (target === toDelete) {
                const resultado = arrCentersState.filter((arr) => arr !== el);
                setArrCentersState(resultado);
            }

        })

        // setTimeout(()=>{
        //   setToggle(!toggle)
        // },500)
    };

    const handleDeleteCenter2 = (Name, Direccion, Horario) => {
        delete stateObjCenters2[Name];
        delete stateObjCenters2[Direccion];
        delete stateObjCenters2[Horario];

        setStateObjCenters2(stateObjCenters2);

        let toDelete = Name.slice(-2).replace("_", '')

        arrCentersState2.map((el, i) => {
            let target = el[0].slice(-2).replace("_", '')

            if (target === toDelete) {
                const resultado = arrCentersState2.filter((arr) => arr !== el);
                setArrCentersState2(resultado);
            }
        });

        // setTimeout(()=>{
        //   setToggle(!toggle)
        // },500)
    };





























    
    return (
        <>
            <div className="col d-flex justify-content-center my-3 ">
                {!localStorage.getItem("Done") ? (
                    <button onClick={openForm} className="btn btn-primary mx-5">
                        CREAR INFORME
                    </button>
                ) : (
                    <p>Gracias !!</p>
                )}
            </div>

            <div className={spinnerState ? 'spinnerContainerHere' : 'spinnerContainer'}>
                <div class='spinner'></div>
            </div>

            <Modal
                centered
                show={showForm}
                onHide={closeForm}
                style={{ width: "96%", marginLeft: "1%" }}
            >
                <form
                    onSubmit={submitForm}
                    style={{ backgroundColor: "rgb(222,222,222)" }}
                >
                    <Modal.Body>
                        {error && <Alert variant="danger">{error}</Alert>}

                        {editingState !== null ? (
                            <Modal.Footer>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => handleCancelar()}
                                >
                                    Cancelar
                                </Button>

                                <Button variant="outline-primary" type="submit">
                                    {editingState !== null
                                        ? "Guardar Cambios"
                                        : "Guardar"}
                                </Button>
                            </Modal.Footer>
                        ) : (
                            <Row>
                                <Col className=" mb-4 text-white fw-bold bg-primary  mx-2 p-2 text-center">
                                    {localStorage.getItem("userEmailLS")}
                                </Col>
                            </Row>
                        )}

                        <Row>
                            <Col>
                                <Form.Label>Imagen</Form.Label>
                                <Form.Group>
                                    <Form.Control
                                        type="file"
                                        label="Cargar Foto"
                                        // required
                                        onChange={onResize}
                                        name="imgUrl"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nombre"
                                        value={nombre}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Parroco</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="parroco"
                                        value={parroco}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Vicario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="vicario"
                                        value={vicario}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="mb-2">
                                <Form.Label>Clasificacion</Form.Label>
                                <Form.Control
                                    as="select"
                                    multiple={false}
                                    value={clasificacion}
                                    name="clasificacion"
                                    onChange={formChange}
                                >
                                    <option value="parroquia">Parroquia</option>
                                    <option value="cuasiparroquia">
                                        Cuasiparroquia
                                    </option>
                                    <option value="catedral">Catedral</option>
                                    <option value="centro">Centro</option>
                                    <option value="santuario">Santuario</option>
                                    <option value="rectoria">Rectoria</option>

                                    <option value="institucion educativa">
                                        Institucion Educativa
                                    </option>
                                    <option value="obra social">
                                        Obra Social
                                    </option>
                                    <option value="vida consagrada femenina">
                                        Vida Consagrada Femenina
                                    </option>

                                    <option value="vida consagrada masculina">
                                        Vida Consagrada Masculina
                                    </option>
                                    <option value="organismo laical">
                                        Organismo Laical
                                    </option>
                                    <option value="otro">Otro</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Decanato</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="decanato"
                                    value={decanato}
                                    onChange={formChange}
                                />
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Confesiones</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="confesiones"
                                        value={confesiones}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="direccion"
                                        value={direccion}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="telefono"
                                        value={telefono}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Horario de Oficina</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="oficina"
                                        value={oficina}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Sitio Web</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="sitioWeb"
                                        value={sitioWeb}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Lunes{" "}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasLunes"
                                        value={horarioDeMisasLunes}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Martes
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasMartes"
                                        value={horarioDeMisasMartes}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Miercoles
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasMiercoles"
                                        value={horarioDeMisasMiercoles}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Jueves
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasJueves"
                                        value={horarioDeMisasJueves}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Viernes
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasViernes"
                                        value={horarioDeMisasViernes}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Sabados
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasSabado"
                                        value={horarioDeMisasSabado}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Horario de Misas Domingos
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="horarioDeMisasDomingo"
                                        value={horarioDeMisasDomingo}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Catesismo Adultos</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="catesismoAdultos"
                                        value={catesismoAdultos}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Catesismo Niños</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="catesismoNinos"
                                        value={catesismoNinos}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Platicas Prematrimoniales
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="preMatrimoniales"
                                        value={preMatrimoniales}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Platicas Prebautismales
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="preBautismales"
                                        value={preBautismales}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Eventos</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="eventos"
                                        value={eventos}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Fiesta Patronal</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fiestaPatronal"
                                        value={fiestaPatronal}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <hr />















                        {arrCentersState.map((el, i) => (
                            <div key={i + "@#$"}>
                                <Row>
                                    <Col>
                                        {arrCentersState.length > 1 &&
                                            el[0] !== "1_Centro_1" && (
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="eliminarCentro"
                                                    onClick={() =>handleDeleteCenter(el[0], el[1], el[2])}
                                                >
                                                    - Eliminar {el[0].slice(2).replace('_', ' ').replace('_', ' ')}
                                                </Button>
                                            )}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                {el[0].slice(2).replace('_', ' ').replace('_', ' ')}
                                            </Form.Label>
                                            <Form.Control
                                                placeholder="Nombre de Centro Parroquial"
                                                type="text"
                                                name={el[0]}
                                                value={stateObjCenters[el[0]]}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Horario de {el[0].slice(1).replace('_', ' ').replace('_', ' ')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name={el[1]}
                                                value={stateObjCenters[el[1]]}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Direccion de {el[0].slice(1).replace('_', ' ').replace('_', ' ')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name={el[2]}
                                                value={stateObjCenters[el[2]]}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr />
                            </div>
                        ))}

                        <Button
                            variant="info"
                            className="AgregarCentro"
                            onClick={handleAddObject}
                        >
                            + Agregar Centro
                        </Button>







                        <hr />

                        {arrCentersState2.map((el, i) => (
                            <div key={i + "@#$-"}>
                                <Row>
                                    <Col>
                                        {arrCentersState2.length > 1 &&
                                            el[0] !== "1a_Grupo_1" && (
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="eliminarCentro"
                                                    onClick={() => handleDeleteCenter2(el[0], el[1], el[2])}
                                                >
                                                    - Eliminar {el[0].slice(3).replace('_', ' ').replace('_', ' ')}
                                                </Button>
                                            )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                {el[0].slice(3).replace('_', ' ').replace('_', ' ')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nombre Grupo Devocional o Apostolado"
                                                name={el[0]}
                                                value={stateObjCenters2[el[0]]}
                                                onChange={handleInputChange2}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Horario de {el[0].slice(2).replace('_', ' ').replace('_', ' ')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name={el[1]}
                                                value={stateObjCenters2[el[1]]}
                                                onChange={handleInputChange2}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Direccion de {el[0].slice(2).replace('_', ' ').replace('_', ' ')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name={el[2]}
                                                value={stateObjCenters2[el[2]]}
                                                onChange={handleInputChange2}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr />
                            </div>
                        ))}

                        <Button variant="info" onClick={handleAddObject2}>
                            + Agregar Grupo / Devocion
                        </Button>


















                        <hr />
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Comentarios</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="comentar..."
                                        style={{ height: "100px" }}
                                        name="comentarios"
                                        value={comentarios}
                                        onChange={formChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => handleCancelar()}
                        >
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            {editingState !== null
                                ? "Guardar Cambios"
                                : "Guardar"}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};
