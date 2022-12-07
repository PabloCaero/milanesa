import './Title.css'

/*FUNCIONES*/

export default function Title({titulo, subtitulo}){
  
  /*DISPONIBLE EN CUALQUIER OTRO ARCHIVO DEL PROYECTO*/
   
  /*SOLO PUEDO ENVIAR UN ELEMENTO*/

    return(
      
      <div>
      <h1 className="title">{titulo}</h1>

      {subtitulo &&
        <p>{subtitulo}</p>
      }

      </div>
    )

}

/*Reglas
//-Letra mayuscula al principio
//-Las etiquetas se cierran
//-Solo se devuelve una etiqueta a la vez. Porque solo envia una etiqueta

/*ESTILOS*/
//className equivalente a class

