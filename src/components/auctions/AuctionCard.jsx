import { useContext } from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';


import './auctionCart.css'




export const AuctionCard = ({ item }) => {



  //const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  /* 
  const milisegundosComoFecha = (milisegundos) => {
      return formateador.format(new Date(milisegundos));
  }; */
  const { deleteById, setToggle, toggle, editInfo, setEditingState } = useContext(FireStoreDataContext);





const handleEdit = (item) =>{
  if(localStorage.getItem('informeLS') === null){
   
    editInfo(item)
  }else{
    localStorage.removeItem('informeLS')
    location.reload()
  }   

}
           
         
        let bgImg = localStorage.urlImgLS


        if(bgImg === undefined){
          bgImg = item.imgUrl
          //console.log('imagen de Nube')
        }else{
          bgImg = localStorage.urlImgLS
          //console.log('imagen Local')
          setTimeout(()=>{
              localStorage.removeItem('urlImgLS')
          },24000)
        }


  return (
    <div className="card shadow-sm ">
      <img src={bgImg}
        style={{
          height: 'auto',
          width:'40%',
          marginLeft:'30%',
          //backgroundImage: `url(${})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="text-center my-4 "
        alt='Carga una Imagen en Editar Informe'
      />

      <div className="w-100 ">
      <h5>{item.email}</h5>
        { <p>{  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</p> }
        <h5>{/* {milisegundosComoFecha(item.duration)} */} </h5>
        
        <hr />

        <p>Nombre:<span> {item.nombre}</span></p>
        <p> Parroco:<span> {item.parroco}</span></p>
        <p> Vicario:<span> {item.vicario}</span></p>
        <p>Clasificacion:<span> {item.clasificacion}</span></p>
        <p> Decanato:<span> {item.decanato}</span></p>

        <hr />

        <p> Confesiones:<span> {item.confesiones}</span></p>      
        <p> Direccion:<span> {item.direccion}</span></p>
        <p> Telefono:<span> {item.telefono}</span></p>
        <p> Horario de Oficina:<span> {item.oficina}</span></p>
        <p> Sitio Web:<span> {item.sitioWeb}</span></p>

        <hr />

        <p> Horario de Misas Lunes:<span> {item.horarioDeMisasLunes}</span></p>
        <p> Horario de Misas Martes:<span> {item.horarioDeMisasMartes}</span></p>
        <p> Horario de Misas Miercoles:<span> {item.horarioDeMisasMiercoles}</span></p>

        <p> Horario de Misas Jueves:<span> {item.horarioDeMisasJueves}</span></p>
        <p> Horario de Misas Viernes:<span> {item.horarioDeMisasViernes}</span></p>

        <p> Horario de Misas Sabado:<span> {item.horarioDeMisasSabado}</span></p>
        <p> Horario de Misas Domingo:<span> {item.horarioDeMisasDomingo}</span></p>

        <hr />

        <p> Catesismo Adultos:<span> {item.catesismoAdultos}</span></p>
        <p> Catesismo Niños:<span> {item.catesismoNinos}</span></p>

        <hr />
       
        <p> Platicas Prematrimoniales:<span> {item.preMatrimoniales}</span></p>
        <p> Platicas Prebautismales:<span> {item.preBautismales}</span></p>
        <p> Eventos:<span> {item.eventos}</span></p>
        <p> Horas Santas:<span> {item.HorasSantas}</span></p>
        <p> Fiesta Patronal: <span>{item.fiestaPatronal}</span></p>

        <hr />

        {
           Object.keys(item.centros).sort()?.map((el, i) => (
            <div className='borderX' key={i+'koko'}>
               <p >{el.slice(2).replace('_', ' ').replace('_', ' ').replace('_', ' ')}:<span> {item.centros[el]}</span></p>
               </div>
          ))
         
        }


        {
           Object.keys(item.grupos).sort()?.map((el, i) => (
            <div className='borderX' key={i+'kok'}>
               <p>{el.slice(3).replace('_', ' ').replace('_', ' ')}:<span> {item.grupos[el]}</span></p>
               </div>
          ))
        }

      


        <p> Comentarios:<span> {item.comentarios}</span></p>

        <hr />

        <div className='btnBorrarInforme'> 
        <button
            className="btn btn-danger m-5"
            onClick={() => {
              if (window.confirm(`Quieres Borrar este Documento?`)) {
                  localStorage.removeItem("Done");
                  localStorage.removeItem('informeLS')

                  deleteById(item.id, item.imgName);
                  setEditingState(null)
                  setTimeout(()=>{  
                      setToggle(!toggle);
                  },1000)
                  
              }
            }}
        >
            BORRAR INFORME
        </button>

        <button
            className="btn btn-primary m-5"
            onClick={()=>
               handleEdit(item)
                   // setToggle(!toggle)
            } 
        >
            EDITAR INFORME
        </button>
        </div>

      </div>
    </div>
  );
};
