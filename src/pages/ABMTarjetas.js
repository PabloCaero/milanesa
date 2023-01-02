import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import {Table, Button, Container, Modal, ModalHeader, FormGroup, ModalFooter, ModalBody, FormCheck} from 'react-bootstrap';
import { useState } from "react";


export default function ABMTarjetas() {

  

  //PARA MANEJO DE MODAL INSERTAR
  const [showInsertar, setShowInsertar] = useState(false);
  const handleCloseInsertar = () => setShowInsertar(false);
  const handleShowInsertar = () => setShowInsertar(true);

  //PARA INSERTAR
  function insertar(){
   tarjetas.push({
      "index": "16",
      "titulo": "[RECETA 16]",
      "imagen": "images/pastas.jpg",
      "precio": "[TIEMPO Y DIFICULTAD]",
      "envio_gratis": true
      
    })

    setShowInsertar(false);
  }

  
  

    return (
      <>


     
      <Container>

        <br />
        <Button variant ="primary" onClick={handleShowInsertar}>Insertar Nuevo Elemento</Button>
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

    <Modal show={showInsertar} onHide={handleCloseInsertar}>
          {/*MODAL PARA ALTA*/}
         <ModalHeader>
           <div><h3>Insertar Registro</h3></div>
         </ModalHeader>

         <ModalBody>
            <FormGroup>
              <label>
                ID:
              </label>

              <input
                id = "txtIndex"
                className="form-control"
                readOnly
                type="text"
                value={tarjetas.length+1}
              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Título:
              </label>

              <input
                className="form-control"
                id = "txtTitulo"
                type="text"
              
              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Precio: $
              </label>

              <input
                className="form-control"
                id = "txtPrecio"
                type="text"
              
              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                URL Imágen:
              </label>

              <input
                className="form-control"
                name = "txtTitulo"
                type="text"
                
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Envío Gratis:
              </label>

              <FormCheck 
                type="switch"
                name="chkEnvio"  
                    
               />   
            </FormGroup>

         </ModalBody>

        
            <ModalFooter>
              <Button variant="primary" oncClick={insertar}>Insertar</Button>
              <Button variant="danger" onClick={handleCloseInsertar}>Cancelar</Button>
            </ModalFooter>


    </Modal>

     </>
    );
  }
  
