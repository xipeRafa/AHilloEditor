import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { useContext, useEffect, useState } from 'react';
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





export const AddAuction = () => {

  const { handleFileAdd, editingState, setEditingState } = useContext(FireStoreDataContext);

    
  useEffect(()=>{

    if(editingState!==null){
      
      setInformeState(editingState)
      openForm()
    }
    
  },[editingState])




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


  const [informeState, setInformeState]=useState({
     nombre : '', 
     clasificacion : '', 
     vicario : '', 
     parroco : '', 
     //itemImage : img, 
     decanato : '', 
     direccion : '', 
     telefono : '', 
     sitioWeb : '', 
  
     horarioDeMisasLunes : '', 
  
     horarioDeMisasMartes : '', 
     horarioDeMisasMiercoles : '', 
     horarioDeMisasJueves : '', 
     horarioDeMisasViernes : '', 
  
     horarioDeMisasSabado : '', 
     horarioDeMisasDomingo : '', 
  
     catesismoAdultos : '', 
     catesismoNinos : '', 
  
     confesiones : '', 
  
     preMatrimoniales : '', 
     preBautismales : '', 
  
     eventos : '', 
     fiestaPatronal : '', 
  
  
     comentarios : '', 
  })

  console.log(informeState)

  const formChange = e => {
    setInformeState({ ...informeState, [e.target.name]: e.target.value })
  }

  const { 
    nombre , 
    clasificacion , 
    vicario , 
    parroco , 

    decanato , 
    direccion , 
    telefono , 
    sitioWeb , 
 
    horarioDeMisasLunes , 
 
    horarioDeMisasMartes , 
    horarioDeMisasMiercoles , 
    horarioDeMisasJueves , 
    horarioDeMisasViernes , 
 
    horarioDeMisasSabado , 
    horarioDeMisasDomingo , 
 
    catesismoAdultos , 
    catesismoNinos , 
 
    confesiones , 
 
    preMatrimoniales , 
    preBautismales , 
 
    eventos , 
    fiestaPatronal , 
    comentarios , 
 } = informeState


  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);



  const handleCancelar = () =>{
    setEditingState(null)
    closeForm()
   
  }
  

  

  const imgTypes = ['image/png', 'image/jpeg', 'image/jpg'];

//============================================================================================================//

    const [stateObjCenters, setStateObjCenters]=useState({
        '1Centro_1': '',
        '1Horario_Centro_1': '',
        '1Direccion_Centro_1': '',
    })


   const handleInputChange = e => {
        setStateObjCenters({ ...stateObjCenters, [e.target.name]: e.target.value })
    }

    
    const [arrCentersState, setArrCentersState]=useState([['1Centro_1','1Horario_Centro_1', '1Direccion_Centro_1']])


    const handleAddObject =()=>{

        let keys = Object.keys(stateObjCenters)

        let newKeyCenter = (String(arrCentersState.length+1)).concat('Centro_'.concat(String(arrCentersState.length+1)))
        let newKeyHorario = (String(arrCentersState.length+1)).concat('Horario_Centro_'.concat(String(arrCentersState.length+1)))
        let newKeyDireccion = (String(arrCentersState.length+1)).concat('Direccion_Centro_'.concat(String(arrCentersState.length+1)))

        stateObjCenters[newKeyCenter] = ''
        stateObjCenters[newKeyHorario] = ''
        stateObjCenters[newKeyDireccion] = ''

        setArrCentersState( [ ...arrCentersState, [newKeyCenter, newKeyHorario, newKeyDireccion] ] )
    }



    //============================================================================================================//
    

    const [stateObjCenters2, setStateObjCenters2]=useState({
        '1aGrupo_1': '',
        '1bHorario_Grupo_1': '',
        '1cDireccion_Grupo_1': '',
    })


   const handleInputChange2 = e => {
        setStateObjCenters2({ ...stateObjCenters2, [e.target.name]: e.target.value })
    }

    

    const [arrCentersState2, setArrCentersState2]=useState([['1aGrupo_1','1bHorario_Grupo_1', '1cDireccion_Grupo_1']])


    const handleAddObject2 =()=>{

        let keys = Object.keys(stateObjCenters2)

        let newKeyGrupo2 = (String(arrCentersState2.length+1)).concat('aGrupo_'.concat(String(arrCentersState2.length+1)))
        let newKeyHorario2 = (String(arrCentersState2.length+1)).concat('bHorario_Grupo_'.concat(String(arrCentersState2.length+1)))
        let newKeyDireccion2 = (String(arrCentersState2.length+1)).concat('cDireccion_Grupo_'.concat(String(arrCentersState2.length+1)))

        stateObjCenters2[newKeyGrupo2] = ''
        stateObjCenters2[newKeyHorario2] = ''
        stateObjCenters2[newKeyDireccion2] = ''

        setArrCentersState2( [ ...arrCentersState2, [newKeyGrupo2, newKeyHorario2, newKeyDireccion2] ] )
    }

//============================================================================================================//




  const submitForm = async (e) => {

    e.preventDefault();
    setError('');

     //(!imgTypes.includes(itemImage.current?.files[0].type)) {
      //return setError('por favor use una imagen valida (png, jpeg, jpg)');
    //}

    let currentDate = new Date();

    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

   
    informeState.email = localStorage.getItem('userEmailLS')
    informeState.duration = dueDate
    informeState.centros = stateObjCenters
    informeState.grupos = stateObjCenters2

    
    if(editingState!==null){
        //editar
        setEditingState(null)
        console.log('edicion')
    }else{
        handleFileAdd(img, informeState);
        console.log('crear ===>>>>>')
    }
    

    closeForm();

    localStorage.setItem("Done", "gracias-AddAuction");
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
                <Form.Label>Imagen</Form.Label>
                <Form.Group>
                  <Form.Control
                    type="file"
                    label="Cargar Foto"
                    required
                    onChange={onResize}
                  />
                </Form.Group>
              </Col>
            </Row>

             <hr />

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name='nombre' value={nombre} onChange={formChange} required  />
                </Form.Group>
              </Col>
            </Row>

             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Parroco</Form.Label>
                  <Form.Control type="text" name='parroco' value={parroco}  onChange={formChange} required  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Vicario</Form.Label>
                  <Form.Control type="text" name='vicario' value={vicario} onChange={formChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Form.Label>Clasificacion</Form.Label>
                <Form.Control as="select" multiple={false} value={clasificacion} name='clasificacion' onChange={formChange} >
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
                <Form.Control type="text" name='decanato' value={decanato} required onChange={formChange} />
              </Col>
            </Row>
            <hr />

             <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Confesiones</Form.Label>
                  <Form.Control type="text" name='confesiones' value={confesiones} onChange={formChange} required  />
                </Form.Group>
              </Col>
            </Row>
           

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" name='direccion' value={direccion} onChange={formChange} required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" name='telefono' value={telefono} onChange={formChange} required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Sitio Web</Form.Label>
                  <Form.Control type="text" name='sitioWeb' value={sitioWeb} onChange={formChange} required />
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
                    name='horarioDeMisasLunes'
                    value={horarioDeMisasLunes}
                    onChange={formChange}
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
                    name='horarioDeMisasMartes'
                    value={horarioDeMisasMartes}
                    onChange={formChange}
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
                    name='horarioDeMisasMiercoles'
                    value={horarioDeMisasMiercoles}
                    onChange={formChange}
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
                    name='horarioDeMisasJueves'
                    value={horarioDeMisasJueves}
                    onChange={formChange}
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
                    name='horarioDeMisasViernes'
                    value={horarioDeMisasViernes}
                    onChange={formChange}
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
                    name='horarioDeMisasSabado'
                    value={horarioDeMisasSabado}
                    onChange={formChange}
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
                    name='horarioDeMisasDomingo'
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
                  <Form.Control type="text" name='catesismoAdultos' value={catesismoAdultos} required onChange={formChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Catesismo Niños</Form.Label>
                  <Form.Control type="text" name='catesismoNinos' value={catesismoNinos} required onChange={formChange} />
                </Form.Group>
              </Col>
            </Row>
     <hr />
           

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Platicas Prematrimoniales</Form.Label>
                  <Form.Control type="text" name='preMatrimoniales' value={preMatrimoniales} required onChange={formChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Platicas Prebautismales</Form.Label>
                  <Form.Control type="text" name='preBautismales' value={preBautismales} required onChange={formChange} />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Eventos</Form.Label>
                  <Form.Control type="text" name='eventos' value={eventos} required onChange={formChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Fiesta Patronal</Form.Label>
                  <Form.Control type="text" name='fiestaPatronal' value={fiestaPatronal} required onChange={formChange} />
                </Form.Group>
              </Col>
            </Row>

            <hr />



           

              {arrCentersState.map((el, i) => (

                <div key={i+'@#$'}>
                  <Row >
                        <Col>
                              <Form.Group>
                                      <Form.Label>{el[0].slice(1)}</Form.Label>
                                      <Form.Control placeholder='Nombre de Centro parroquial' type="text"  name={el[0]}  onChange={handleInputChange}/>
                              </Form.Group>
                        </Col>
                  </Row>

                  <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Horario de {el[0].slice(1)}</Form.Label>
                                  <Form.Control type="text"  name={el[1]} onChange={handleInputChange} />
                              </Form.Group>
                          </Col>
                    </Row>


                    <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Direccion de {el[0].slice(1)}</Form.Label>
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
                                      <Form.Label>{el[0].slice(2)}</Form.Label>
                                      <Form.Control type="text" placeholder='Nombre Grupo Devocional o Apostolado' name={el[0]} onChange={handleInputChange2}/>
                              </Form.Group>
                        </Col>
                  </Row>

                  <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Horario de {el[0].slice(2)}</Form.Label>
                                  <Form.Control type="text"  name={el[1]} onChange={handleInputChange2} />
                              </Form.Group>
                          </Col>
                    </Row>


                    <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Direccion de {el[0].slice(2)}</Form.Label>
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
                    name='comentarios'
                    value={comentarios}
                    onChange={formChange}
                  />
                </Form.Group>
              </Col>
            </Row>
           

          </Modal.Body>



          <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleCancelar()}>
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
