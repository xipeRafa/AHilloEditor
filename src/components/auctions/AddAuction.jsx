import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  Form,
  Modal,
  Alert,
  Row,
  Col /* , Select */,
} from 'react-bootstrap';

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





export const AddAuction = (items) => {

  const { handleFileAdd } = useContext(FireStoreDataContext);

  const[img, setImg]=useState()




const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      80,
      0,
      (uri) => {resolve(uri);},"base64");
  });

  const onResize = async (event) => {
    const file = event.target.files[0];

    const image = await resizeFile(file);

    fetch(image).then(res => res.blob())
      .then(blob => {
          const file = new File([blob], Date.now()+'.jpeg',{ type: "image/jpeg" })
          setImg(file)
    })
  };


  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const nombre = useRef();
  const clasificacion = useRef();
  const vicario = useRef();
  const parroco = useRef();
  const itemImage = useRef();
  const decanato = useRef();
  const direccion = useRef();
  const telefono = useRef();
  const sitioWeb = useRef();

  const horarioDeMisasLunes = useRef();

  const horarioDeMisasMartes = useRef();
  const horarioDeMisasMiercoles = useRef();
  const horarioDeMisasJueves = useRef();
  const horarioDeMisasViernes = useRef();

  const horarioDeMisasSabado = useRef();
  const horarioDeMisasDomingo = useRef();

  const catesismoAdultos = useRef();
  const catesismoNinos = useRef();

  const confesiones = useRef();

  const preMatrimoniales = useRef();
  const preBautismales = useRef();

  const eventos = useRef();
  const fiestaPatronal = useRef();


  const comentarios = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const imgTypes = ['image/png', 'image/jpeg', 'image/jpg'];

//============================================================================================================//

    const [stateObjCenters, setStateObjCenters]=useState({
        Centro_1: '',
        Horario_Centro_1: '',
        Direccion_Centro_1: '',
    })


   const handleInputChange = e => {
        setStateObjCenters({ ...stateObjCenters, [e.target.name]: e.target.value })
    }

    
    const [arrCentersState, setArrCentersState]=useState([['Centro_1','Horario_Centro_1', 'Direccion_Centro_1']])


    const handleAddObject =()=>{

        let keys = Object.keys(stateObjCenters)

        let newKeyCenter = 'Centro_'.concat(String(arrCentersState.length+1))
        let newKeyHorario = 'Horario_Centro_'.concat(String(arrCentersState.length+1))
        let newKeyDireccion = 'Direccion_Centro_'.concat(String(arrCentersState.length+1))

        stateObjCenters[newKeyCenter] = ''
        stateObjCenters[newKeyHorario] = ''
        stateObjCenters[newKeyDireccion] = ''

        setArrCentersState( [ ...arrCentersState, [newKeyCenter, newKeyHorario, newKeyDireccion] ] )
    }



    //============================================================================================================//
    

    const [stateObjCenters2, setStateObjCenters2]=useState({
        Grupo_1: '',
        Horario_Grupo_1: '',
        Direccion_Grupo_1: '',
    })


   const handleInputChange2 = e => {
        setStateObjCenters2({ ...stateObjCenters2, [e.target.name]: e.target.value })
    }

    

    const [arrCentersState2, setArrCentersState2]=useState([['Grupo_1','Horario_Grupo_1', 'Direccion_Grupo_1']])


    const handleAddObject2 =()=>{

        let keys = Object.keys(stateObjCenters2)

        let newKeyGrupo2 = 'Grupo_'.concat(String(arrCentersState2.length+1))
        let newKeyHorario2 = 'Horario_Grupo_'.concat(String(arrCentersState2.length+1))
        let newKeyDireccion2 = 'Direccion_Grupo_'.concat(String(arrCentersState2.length+1))

        stateObjCenters2[newKeyGrupo2] = ''
        stateObjCenters2[newKeyHorario2] = ''
        stateObjCenters2[newKeyDireccion2] = ''

        setArrCentersState2( [ ...arrCentersState2, [newKeyGrupo2, newKeyHorario2, newKeyDireccion2] ] )
    }

//============================================================================================================//




  const submitForm = async (e) => {

    e.preventDefault();
    setError('');

    if (!imgTypes.includes(itemImage.current?.files[0].type)) {
      return setError('por favor use una imagen valida (png, jpeg, jpg)');
    }

    let currentDate = new Date();

    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

    let newAuction = {
      email: localStorage.getItem('userEmailLS'),
      nombre: nombre.current.value,
      clasificacion: clasificacion.current.value,
      vicario: vicario.current.value,
      parroco: parroco.current.value,

      duration: dueDate,

      direccion: direccion.current.value,
      telefono: telefono.current.value,
      sitioWeb: sitioWeb.current.value,

      decanato: decanato.current.value,

      horarioDeMisasLunes: horarioDeMisasLunes.current.value,
      horarioDeMisasMartes: horarioDeMisasMartes.current.value,
      horarioDeMisasMiercoles: horarioDeMisasMiercoles.current.value,

      horarioDeMisasJueves: horarioDeMisasJueves.current.value,
      horarioDeMisasViernes: horarioDeMisasViernes.current.value,

      horarioDeMisasSabado: horarioDeMisasSabado.current.value,
      horarioDeMisasDomingo: horarioDeMisasDomingo.current.value,

      catesismoAdultos: catesismoAdultos.current.value,
      catesismoNinos: catesismoNinos.current.value,

      confesiones: confesiones.current.value,

      preMatrimoniales: preMatrimoniales.current.value,
      preBautismales: preBautismales.current.value,

      eventos: eventos.current.value,
      fiestaPatronal: fiestaPatronal.current.value,

      centros: stateObjCenters,
      grupos: stateObjCenters2,

      comentarios: comentarios.current.value,
    };

    handleFileAdd(img, newAuction);

    closeForm();

    localStorage.setItem("Done", "graciasAdd-192");
  };


    

   

    

  return (
    <>
      <div className="col d-flex justify-content-center my-3 ">

      {  !localStorage.getItem("Done") ?  

      
        <button onClick={openForm} className="btn btn-primary mx-5">
          CREAR INFORME
        </button>: <p>Gracias !!</p>
   
      }
            </div>

      <Modal
        centered
        show={showForm}
        onHide={closeForm}
        style={{ width: '96%', marginLeft: '1%' }}
      >
        <form
          onSubmit={submitForm}
          style={{ backgroundColor: 'rgb(222,222,222)' }}
        >
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col className="border mb-5 btn bg-primary mx-2 p-2 text-center text-white">
                {localStorage.getItem('userEmailLS')}
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" required ref={nombre} />
                </Form.Group>
              </Col>
            </Row>

             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Parroco</Form.Label>
                  <Form.Control type="text" required ref={parroco} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Vicario</Form.Label>
                  <Form.Control type="text" required ref={vicario} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Form.Label>Clasificacion</Form.Label>
                <Form.Control as="select" multiple={false} ref={clasificacion}>
                  <option value="parroquia">Parroquia</option>
                  <option value="cuasiparroquia">Cuasiparroquia</option>
                  <option value="catedral">Catedral</option>
                  <option value="centro">Centro</option>
                  <option value="santuario">Santuario</option>
                  <option value="rectoria">Rectoria</option>

                  <option value="institucion educativa">
                    Institucion Educativa
                  </option>
                  <option value="obra social">Obra Social</option>
                  <option value="vida consagrada femenina">
                    Vida Consagrada Femenina
                  </option>

                  <option value="vida consagrada masculina">
                    Vida Consagrada Masculina
                  </option>
                  <option value="organismo laical">Organismo Laical</option>
                  <option value="otro">Otro</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Decanato</Form.Label>
                <Form.Control type="text" required ref={decanato} />
              </Col>
            </Row>
            <hr />

             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Confesiones</Form.Label>
                  <Form.Control type="text" required ref={confesiones} />
                </Form.Group>
              </Col>
            </Row>
           

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" required ref={direccion} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" required ref={telefono} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Sitio Web</Form.Label>
                  <Form.Control type="text" required ref={sitioWeb} />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Lunes </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasLunes}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Martes</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasMartes}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Miercoles</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasMiercoles}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Jueves</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasJueves}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Viernes</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasViernes}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Sabados</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasSabado}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Domingos</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    ref={horarioDeMisasDomingo}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr />


            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Catesismo Adultos</Form.Label>
                  <Form.Control type="text" required ref={catesismoAdultos} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Catesismo Niños</Form.Label>
                  <Form.Control type="text" required ref={catesismoNinos} />
                </Form.Group>
              </Col>
            </Row>
     <hr />
           

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Platicas Prematrimoniales</Form.Label>
                  <Form.Control type="text" required ref={preMatrimoniales} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Platicas Prebautismales</Form.Label>
                  <Form.Control type="text" required ref={preBautismales} />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Eventos</Form.Label>
                  <Form.Control type="text" required ref={eventos} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Fiesta Patronal</Form.Label>
                  <Form.Control type="text" required ref={fiestaPatronal} />
                </Form.Group>
              </Col>
            </Row>

            <hr />



           

              {arrCentersState.map((el, i) => (

                <div key={i+'@#$'}>
                  <Row >
                        <Col>
                              <Form.Group>
                                      <Form.Label>{el[0]}</Form.Label>
                                      <Form.Control placeholder='Nombre de Centro parroquial' type="text"  name={el[0]} onChange={handleInputChange}/>
                              </Form.Group>
                        </Col>
                  </Row>

                  <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Horario de {el[0]}</Form.Label>
                                  <Form.Control type="text"  name={el[1]} onChange={handleInputChange} />
                              </Form.Group>
                          </Col>
                    </Row>


                    <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Direccion de {el[0]}</Form.Label>
                                  <Form.Control type="text"  name={el[2]} onChange={handleInputChange} />
                              </Form.Group>
                          </Col>
                    </Row>
                     <hr/>
                </div>


                      
              ))}

            <Button variant="info" className="AgregarCentro" onClick={handleAddObject}>
              + Agregar Centro
            </Button>



            <hr />




              {arrCentersState2.map((el, i) => (

                <div key={i+'@#$-'}>
                  <Row >
                        <Col>
                              <Form.Group>
                                      <Form.Label>{el[0]}</Form.Label>
                                      <Form.Control type="text" placeholder='Nombre Grupo Devocional o Apostolado' name={el[0]} onChange={handleInputChange2}/>
                              </Form.Group>
                        </Col>
                  </Row>

                  <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Horario de {el[0]}</Form.Label>
                                  <Form.Control type="text"  name={el[1]} onChange={handleInputChange2} />
                              </Form.Group>
                          </Col>
                    </Row>


                    <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Direccion de {el[0]}</Form.Label>
                                  <Form.Control type="text"   name={el[2]} onChange={handleInputChange2} />
                              </Form.Group>
                          </Col>
                    </Row>
                     <hr/>
                </div>
                      
              ))}


            <Button variant="info" onClick={handleAddObject2}>+ Agregar Grupo - Devocion</Button>

            <hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="comentar..."
                    style={{ height: '100px' }}
                    required
                    ref={comentarios}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />

            <Row>
              <Col>
                <Form.Label>Imagen</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="file"
                    label="Cargar Foto"
                    required
                    ref={itemImage}
                      onChange={onResize}
                  />
                </Form.Group>
              </Col>
            </Row>


    



          </Modal.Body>



          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>




        </form>
      </Modal>
    </>
  );
};
