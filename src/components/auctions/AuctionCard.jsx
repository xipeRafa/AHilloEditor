import { useContext } from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';

export const AuctionCard = ({ item }) => {
  //const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  /* 
  const milisegundosComoFecha = (milisegundos) => {
      return formateador.format(new Date(milisegundos));
  }; */
  const { deleteById, setToggle, toggle } = useContext(FireStoreDataContext);

  return (
    <div className="card shadow-sm ">
      <div
        style={{
          height: '180px',
          backgroundImage: `url(${item.imgUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-100 mt-4"
      />

      <div className="card-body p-4 ">
        {/* <h5>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</h5> */}
        <h5>{/* {milisegundosComoFecha(item.duration)} */} </h5>
        <h5>{item.email}</h5>
        <hr />
        <h5>Nombre: {item.nombre}</h5>
        <h5>Clasificacion: {item.clasificacion}</h5>
        <h5> Decanato: {item.decanato}</h5>
        <hr />

        <h5> Parroco: {item.parroco}</h5>
        <h5> Vicario: {item.vicario}</h5>
        <h5> Direccion: {item.direccion}</h5>
        <h5> Telefono: {item.telefono}</h5>
        <h5> Sitio Web: {item.sitioWeb}</h5>
        <hr />

        <h5> Horario de Misas Lunes: {item.horarioDeMisasLunes}</h5>

        <h5> Horario de Misas Martes: {item.horarioDeMisasMartes}</h5>
        <h5> Horario de Misas Miercoles: {item.horarioDeMisasMiercoles}</h5>
        <h5> Horario de Misas Jueves: {item.horarioDeMisasJueves}</h5>
        <h5> Horario de Misas Viernes: {item.horarioDeMisasViernes}</h5>

        <h5> Horario de Misas Sabado: {item.horarioDeMisasSabado}</h5>
        <h5> Horario de Misas Domingo: {item.horarioDeMisasDomingo}</h5>
        <hr />

        <h5> catesismo Adultos: {item.catesismoAdultos}</h5>
        <h5> catesismo Niños: {item.catesismoNinos}</h5>
        <h5> Confesiones: {item.confesiones}</h5>
        <h5> Platicas Prematrimoniales: {item.preMatrimoniales}</h5>
        <h5> Platicas Prebautismales: {item.preBautismales}</h5>
        <h5> Eventos: {item.eventos}</h5>
        <h5> Fiesta Patronal: {item.fiestaPatronal}</h5>
        <hr />

/* generadores js */
        <h5> Centro: {item.centros}</h5>
        <h5> Horario de Centro: {item.horarioDeCentros}</h5>

        <h5> Grupos - Devociones: {item.grupos}</h5>
        <h5> Grupos - Devociones: {item.gruposDatos}</h5>

        <hr />
        <h5> Comentarios: {item.comentarios}</h5>

        <button
          className="btn btn-danger"
          onClick={() => {
            if (
              window.confirm(`Quiere Borrar este Documento? ${item.imgName}`)
            ) {
              deleteById(item.id, item.imgName);
              setToggle(!toggle);
            }
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};
