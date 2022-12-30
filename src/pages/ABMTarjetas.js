import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import { Table, Button, Container/*, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter */} from 'react-bootstrap';
//import { useState } from "react";

export default function ABM_Tarjetas() {
    

    return (
      <>
     
      <Container>

        <br />
        <Button variant ="primary">Insertar Nuevo Elemento</Button>
        <br /><br />

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>URL Imagen</th>
              <th>Envío</th>  
              <th>Acciones</th>  

            </tr>
          </thead>

            <tbody>
            {tarjetas.map((tarjeta, index) => (
              
              <tr>
              <td>{tarjeta.index}</td>
              <td>{tarjeta.titulo}</td>
              <td>${tarjeta.precio}</td>
              <td>{tarjeta.imagen}</td>
              <td>{tarjeta.envio_gratis &&
                  <p>Gratis 🙂</p>
                  }
                  {!tarjeta.envio_gratis &&
                  <p>No es Gratis 🥺</p>
                  }                 
              </td>          
              <td>
                <Button variant="warning">Editar</Button>
                {" "}
                <Button variant="danger">Borrar</Button>
              </td>          
             </tr>
      
            ))}

            </tbody>

        </Table>
      </Container>



     </>
    );
  }
  
