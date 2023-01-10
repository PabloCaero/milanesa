import './Contacto.css';

export default function Contacto(){
  return(
    <>
    <br />
    <h1>¡Dejanos un mensaje! 😊</h1>
    <div className="container3">  
            <form id="contact" action="" method="post">
        
    <fieldset>
      <input placeholder="Nombre" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Email" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Contacto Telefónico" type="tel" tabindex="3" />
    </fieldset>
        
    <fieldset>
      <textarea placeholder="Tu mensaje" tabindex="5" required></textarea>
        </fieldset>
            <fieldset>
      <button name="submit" type="submit" id="contact-submit">Enviar 🕊️</button>
            </fieldset>
       
        </form>
</div>
</>
    )
}