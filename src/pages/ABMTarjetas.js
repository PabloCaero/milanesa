import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import {Table, Button, Container, Modal, ModalHeader, FormGroup, ModalFooter, ModalBody } from 'reactstrap';
import React from 'react';



class ABMTarjetas extends React.Component{

  state = {
    modalInsertar: false,
    modalModificar: false,

    form:{
      index: '',
      titulo: '',
      precio: '',
      imagen: '',
      envio_gratis: false 
    }

  }

  //PARA MODIFICAR
  mostrarModalModificar=(dato)=>{
    this.setState({modalModificar:true, form: dato});
  
  }

  ocultarModalModificar=()=>{
    this.setState({modalModificar:false});
  }

  modificar=()=>{
    
  }

  
  //PARA INSERTAR
  mostrarModalInsertar=()=>{
    this.setState({modalInsertar:true});
  
  }

  ocultarModalInsertar=()=>{
    this.setState({modalInsertar:false});
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.index = tarjetas.length+1;

    var lista = tarjetas;
    lista.push(valorNuevo);
    this.setState({tarjetas: lista, modalInsertar: false})
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }




    render(){
      return(
    
      <>  
      <Container>

        <br />
        <Button color ="primary" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Elemento</Button>
        <br /><br />

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              {/*<th>URL Imagen</th>*/}
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
              {/*<td >{tarjeta.imagen}</td>*/}
              <td>{tarjeta.envio_gratis &&
                  <p>Gratis 🙂</p>
                  }
                  {!tarjeta.envio_gratis &&
                  <p>No es Gratis 🥺</p>
                  }                 
              </td>          
              <td>
                <Button color="warning" onClick={()=>this.mostrarModalModificar(tarjeta)}>Editar</Button>
                {" "}
                <Button color="danger">Borrar</Button>
              </td>          
             </tr>
      
            ))}

            </tbody>

        </Table>
      </Container>

    {/*MODAL PARA INSERTAR*/}
    <Modal isOpen={this.state.modalInsertar}>
         <ModalHeader>
           <div><h3>Insertar Registro</h3></div>
         </ModalHeader>

         <ModalBody>
            <FormGroup>
              <label>
                ID:
              </label>

              <input
                name = "index"
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
                name = "titulo"
                type="text"
                onChange = {this.handleChange}              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Precio: $
              </label>

              <input
                className="form-control"
                name = "precio"
                type="text"
                onChange = {this.handleChange}  
              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                URL Imágen:
              </label>

              <input
                className="form-control"
                name = "imagen"
                type="text"
                onChange = {this.handleChange}  
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Envío Gratis:
              </label>
                  <br />
              <input
                type="checkbox"
                name="envio_gratis"  
                onChange = {this.handleChange}      
               />   
            </FormGroup>

         </ModalBody>

        
            <ModalFooter>
              <Button color="primary" onClick={()=>this.insertar()} >Insertar</Button>
              <Button color="danger" onClick={()=>this.ocultarModalInsertar()} >Cancelar</Button>
            </ModalFooter>


    </Modal>


     {/*MODAL PARA MODIFICAR*/}
     <Modal isOpen={this.state.modalModificar}>
         <ModalHeader>
           <div><h3>Modificar Registro</h3></div>
         </ModalHeader>

         <ModalBody>
            <FormGroup>
              <label>
                ID:
              </label>

              <input
                name = "index"
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.index}
              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Título:
              </label>

              <input
                className="form-control"
                name = "titulo"
                type="text"
                onChange = {this.handleChange}    
                value={this.state.form.titulo}          
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Precio: $
              </label>

              <input
                className="form-control"
                name = "precio"
                type="text"
                onChange = {this.handleChange}  
                value={this.state.form.precio}  
              
              />        
            </FormGroup>

            <FormGroup>
              <label>
                URL Imágen:
              </label>

              <input
                className="form-control"
                name = "imagen"
                type="text"
                onChange = {this.handleChange}  
                value={this.state.form.imagen}  
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Envío Gratis:
              </label>
                  <br />
              <input
                type="checkbox"
                name="envio_gratis"  
                onChange = {this.handleChange}  
                value={this.state.form.envio_gratis}      
               />   
            </FormGroup>

         </ModalBody>

        
            <ModalFooter>
              <Button color="primary" onClick={()=>this.modificar()} >Modificar</Button>
              <Button color="danger" onClick={()=>this.ocultarModalModificar()} >Cancelar</Button>
            </ModalFooter>


    </Modal>


     </>)
    
  }
}

  export default ABMTarjetas;
  
