//import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function AgregarTarjeta() {
    
    const [tituloState, setTitulo] = useState(); //ES UN ARRAY
    const [precioState, setPrecio] = useState(); //ES UN ARRAY
    const [imagenState, setImagen] = useState(); //ES UN ARRAY
    const [envioState, setEnvio] = useState(false); //ES UN ARRAY
 


    function mostrarReceta(){
        setTitulo(document.getElementById("titulo").value);       
        setPrecio(document.getElementById("precio").value);       
        setImagen(document.getElementById("imagen").value);     
        
        var chk2 = document.getElementById("envio_gratis");
        setEnvio(chk2.checked);       
    }

    return (
      <>
      <Form>
        <Form.Group className="md-3 col-4"  controlId="formBasicEmail">

          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" id="titulo" />

          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" id="imagen" />

          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" id="precio" />

          <Form.Label>Envío Gratis</Form.Label>
          <Form.Check type="checkbox" id="envio_gratis" />
         
        </Form.Group>
  
        
        <Button variant="primary" type="submit" onClick={mostrarReceta}>
          Mostrar
        </Button>


      </Form>

        <label id="labelTitulo">El titulo es: {tituloState}</label>
        <br />
        <label id="labelTitulo">El precio es: {precioState}</label>
        <br />
        <label id="labelTitulo">La imagen es: {imagenState}</label>
        <br />
        {envioState &&
          <label id="labelTitulo">El envío es : true</label>
        }
        {!envioState &&
          <label id="labelTitulo">El envío es : false</label>
        }
     </>
    );
  }
  
  export default AgregarTarjeta;