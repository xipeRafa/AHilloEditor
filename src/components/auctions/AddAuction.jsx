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

  const { handleFileAdd, editingState, setEditingState, UpdateById, toggle, setToggle, changeImg } = useContext(FireStoreDataContext);


  useEffect(()=>{

    if(editingState!==null){
      
      setInformeState(editingState)

      let centersKeys = Object.keys(editingState.centros).sort()

      

      let arr1 = []
      let arr2 = []
      let arr3 = []
      let arr4 = []
      let arr5 = []
      let arr6 = []
      let arr7 = []
      let arr8 = []
      let arr9 = []
      let arr10 = []
      let arr11 = []
      let arr12 = []

      let arrTotal = [arr1]


      centersKeys.map((el, i)=>{
        if(i<=2){
           arr1.push(el)
        }
        if(i>=3 && i<=5){ 
            arr2.push(el)
        }
        if(i>=6 && i<=8){
          arr3.push(el)
        }
        if(i>=9 && i<=11){
          arr4.push(el)
        }
        if(i>=12 && i<=14){
          arr5.push(el)
        }
        if(i>=15 && i<=17){
          arr6.push(el)
        }

        if(i>=18 && i<=20){
          arr7.push(el)
        }
        if(i>=21 && i<=23){
          arr8.push(el)
        }
        if(i>=25 && i<=26){
          arr9.push(el)
        }
        if(i>=27 && i<=29){
          arr10.push(el)
        }
        if(i>=30 && i<=32){
          arr11.push(el)
        }
        if(i>=33 && i<=35){
          arr12.push(el)
        }
      })


      if(arr2.length>2){
        arrTotal.push(arr2)
      }

      if(arr3.length>2){
        arrTotal.push(arr3)
      }

      if(arr4.length>2){
        arrTotal.push(arr4)
      }

      if(arr5.length>2){
        arrTotal.push(arr5)
      }

      if(arr6.length>2){
        arrTotal.push(arr6)
      }

      if(arr7.length>2){
        arrTotal.push(arr7)
      }

      if(arr8.length>2){
        arrTotal.push(arr8)
      }

      if(arr9.length>2){
        arrTotal.push(arr9)
      }

      if(arr10.length>2){
        arrTotal.push(arr10)
      }

      if(arr11.length>2){
        arrTotal.push(arr11)
      }

      if(arr12.length>2){
        arrTotal.push(arr12)
      }


      setArrCentersState( arrTotal )






      let gruposKeys = Object.keys(editingState.grupos).sort()


      let arr1Grupos = []
      let arr2Grupos = []
      let arr3Grupos = []
      let arr4Grupos = []
      let arr5Grupos = []
      let arr6Grupos = []
      let arr7Grupos = []
      let arr8Grupos = []
      let arr9Grupos = []
      let arr10Grupos = []
      let arr11Grupos = []
      let arr12Grupos = []

      let arrTotalGrupos = [arr1Grupos]
      
      gruposKeys.map((el, i)=>{
        if(i<=2){
           arr1Grupos.push(el)
        }
        if(i>=3 && i<=5){ 
            arr2Grupos.push(el)
        }
        if(i>=6 && i<=8){
          arr3Grupos.push(el)
        }
        if(i>=9 && i<=11){
          arr4Grupos.push(el)
        }
        if(i>=12 && i<=14){
          arr5Grupos.push(el)
        }
        if(i>=15 && i<=17){
          arr6Grupos.push(el)
        }


        if(i>=18 && i<=20){
          arr7Grupos.push(el)
        }
        if(i>=21 && i<=23){
          arr8Grupos.push(el)
        }
        if(i>=25 && i<=26){
          arr9Grupos.push(el)
        }
        if(i>=27 && i<=29){
          arr10Grupos.push(el)
        }
        if(i>=30 && i<=32){
          arr11Grupos.push(el)
        }
        if(i>=33 && i<=35){
          arr12Grupos.push(el)
        }
      })




      if(arr2Grupos.length>2){
        arrTotalGrupos.push(arr2Grupos)
      }

      if(arr3Grupos.length>2){
        arrTotalGrupos.push(arr3Grupos)
      }

      if(arr4Grupos.length>2){
        arrTotalGrupos.push(arr4Grupos)
      }

      if(arr5Grupos.length>2){
        arrTotalGrupos.push(arr5Grupos)
      }

      if(arr6Grupos.length>2){
        arrTotalGrupos.push(arr6Grupos)
      }


      if(arr7Grupos.length>2){
        arrTotalGrupos.push(arr7Grupos)
      }

      if(arr8Grupos.length>2){
        arrTotalGrupos.push(arr8Grupos)
      }

      if(arr9Grupos.length>2){
        arrTotalGrupos.push(arr9Grupos)
      }

      if(arr10Grupos.length>2){
        arrTotalGrupos.push(arr10Grupos)
      }

      if(arr11Grupos.length>2){
        arrTotalGrupos.push(arr11Grupos)
      }

      if(arr12Grupos.length>2){
        arrTotalGrupos.push(arr12Grupos)
      }



      setArrCentersState2( arrTotalGrupos )



      setStateObjCenters(editingState.centros)
      setStateObjCenters2(editingState.grupos)


      openForm()
    }

    if(editingState===null){
        handleCancelar()
        console.log('handleCancelar====>>>>')
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
     oficina : '',
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
    oficina ,
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

    setInformeState({
     nombre : '', 
     clasificacion : '', 
     vicario : '', 
     parroco : '', 
     //itemImage : img, 
     decanato : '', 
     direccion : '', 
     telefono : '', 
     oficina : '',
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

    setStateObjCenters2({
      '1aGrupo_1': '',
      '1bHorario_Grupo_1': '',
      '1cDireccion_Grupo_1': '',
    })

    setStateObjCenters({
      '1Centro_1': '',
      '1Horario_Centro_1': '',
      '1Direccion_Centro_1': '',
    })

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
        UpdateById(informeState.id, informeState)
        changeImg(img, informeState.imgName)
        setToggle(!toggle)
        //edicion====>>>
    }else{
        handleFileAdd(img, informeState);
        //crear ===>>>>>
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
                  <Form.Label>Horario de Oficina</Form.Label>
                  <Form.Control type="text" name='oficina' value={oficina} onChange={formChange} required />
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
                                      <Form.Control required placeholder='Nombre de Centro Parroquial' type="text"  name={el[0]} value={stateObjCenters[el[0]]}  onChange={handleInputChange}/>
                              </Form.Group>
                        </Col>
                  </Row>

                  <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Horario de {el[0].slice(1)}</Form.Label>
                                  <Form.Control type="text" required  name={el[1]}  value={stateObjCenters[el[1]]} onChange={handleInputChange} />
                              </Form.Group>
                          </Col>
                    </Row>


                    <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Direccion de {el[0].slice(1)}</Form.Label>
                                  <Form.Control type="text" required  name={el[2]} value={stateObjCenters[el[2]]} onChange={handleInputChange} />
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
                                      <Form.Control type="text" required placeholder='Nombre Grupo Devocional o Apostolado' name={el[0]} value={stateObjCenters2[el[0]]} onChange={handleInputChange2}/>
                              </Form.Group>
                        </Col>
                  </Row>

                  <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Horario de {el[0].slice(2)}</Form.Label>
                                  <Form.Control type="text"  required name={el[1]} value={stateObjCenters2[el[1]]} onChange={handleInputChange2} />
                              </Form.Group>
                          </Col>
                    </Row>


                    <Row>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Direccion de {el[0].slice(2)}</Form.Label>
                                  <Form.Control type="text"  required  name={el[2]} value={stateObjCenters2[el[2]]} onChange={handleInputChange2} />
                              </Form.Group>
                          </Col>
                    </Row>
                     <hr/>
                </div>

                
                      
            ))}



                <Button variant="info" onClick={handleAddObject2}>
                    + Agregar Grupo - Devocion
                </Button>



              
















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
              {editingState !== null ? 'Guardar Cambios' : 'Guardar'}   
            </Button>
          </Modal.Footer>




        </form>
      </Modal>
    </>
  );
};
