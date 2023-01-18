import './Contacto.css';
import {Button} from 'reactstrap';

export default function Contacto(){

  
  function enviar(){
    
    var nombre = document.getElementById("txtNombre");
    

    if(nombre.value !== ""){
      var mensaje = nombre.value + ", tu mensaje fue enviado correctamente. A la brevedad nos contactaremos con vos! 😊"
      alert(mensaje);
    }
   
  }

  return(
    <>
    <br />
    <h1>¡Dejanos un mensaje! 😊</h1>
    <div className="container3">  
            <form id="contact">
        
    <fieldset>
      <input id="txtNombre" placeholder="Nombre" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input id="txtMail" placeholder="Email" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Contacto Telefónico" type="tel" tabindex="3" />
    </fieldset>
        
    <fieldset>
      <textarea id="txtMensaje" placeholder="Tu mensaje" tabindex="5" required></textarea>
        </fieldset>
            <fieldset>
      <Button color="primary" onClick={enviar} type="submit">Enviar 🕊️</Button>
            </fieldset>
       
        </form>
</div>
</>
    )
}