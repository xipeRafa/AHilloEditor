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

export const AddAuction = (items) => {
  const { handleFileAdd } = useContext(FireStoreDataContext);

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

  const centros = useRef();
  const horarioDeCentros = useRef();
  const grupos = useRef();
  const gruposDatos = useRef();

  const comentarios = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const imgTypes = ['image/png', 'image/jpeg', 'image/jpg'];

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
      /* generadores js */
      centros: centros.current.value,
      horarioDeCentros: horarioDeCentros.current.value,
      grupos: grupos.current.value,
      gruposDatos: gruposDatos.current.value,

      comentarios: comentarios.current.value,
    };

    handleFileAdd(itemImage.current?.files[0], newAuction);

    closeForm();
  };
  console.log(items.length);
  return (
    <>
      <div className="col d-flex justify-content-center my-3 ">
        <button onClick={openForm} className="btn btn-primary mx-5">
          CREAR INFORME
        </button>
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
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Centro</Form.Label>
                  <Form.Control type="text" required ref={centros} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Centro</Form.Label>
                  <Form.Control type="text" required ref={horarioDeCentros} />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="light" className="AgregarCentro">
              + Agregar Centro
            </Button>
            <hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Grupos - Devocion</Form.Label>
                  <Form.Control type="text" required ref={grupos} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Datos de Grupo</Form.Label>
                  <Form.Control type="text" required ref={gruposDatos} />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="light">+ Agregar Grupo</Button>

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
