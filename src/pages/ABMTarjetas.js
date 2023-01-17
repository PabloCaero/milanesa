import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import {Table, Button, Container, Modal, ModalHeader, FormGroup, ModalFooter, ModalBody } from 'reactstrap';
import React from 'react';
import LoginAdmin from './LoginAdmin';





class ABMTarjetas extends React.Component{



  state = {
    modalInsertar: false,
    modalModificar: false,

    form:{
      index: '',
      titulo: '',
      descripcion: '',
      imagen: '',
      link_receta: '',
      condicion_tf: false 
    }

  }

  //PARA MODIFICAR
  mostrarModalModificar=(dato)=>{
    this.setState({modalModificar:true, form: dato});
  
  }

  ocultarModalModificar=()=>{
    this.setState({modalModificar:false});
  }

  modificar=(dato)=>{
    var contador = 0;
    var lista = tarjetas;
    
    lista.forEach((tarjeta)=>{
      if(dato.index===tarjeta.index){
        lista[contador].titulo = dato.titulo;
        lista[contador].descripcion = dato.descripcion;
        lista[contador].imagen = dato.imagen;
        lista[contador].link_receta = dato.link_receta;
        lista[contador].condicion_tf = dato.condicion_tf;
      }
      contador++;
      
  });
    this.setState({tarjetas: lista, modalModificar: false});
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

//PARA ELIMINAR
eliminar=(dato)=>{
    var contador=0;
    var lista = tarjetas;
    lista.forEach((tarjeta)=>{
      if(tarjeta.index===dato.index){
        lista.splice(contador, 1);
      }
      contador++;
    });
    this.setState({tarjetas: lista})
}


    render(){
      return(

        
        <>  
        <LoginAdmin></LoginAdmin>
        <br />
        <h1>Administración de Recetas</h1>   
        <br />
      <Container>

        <br />
        <Button color ="primary" onClick={()=>this.mostrarModalInsertar()}>Insertar Nueva Receta</Button>
        <br /><br />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              {/*<th>Descripcion</th>*/}
              {/*<th>URL Imagen</th>*/}
              <th>Tipo de Receta</th>  
              <th>Acciones</th>  

            </tr>
          </thead>

            <tbody>
            {tarjetas.map((tarjeta, index) => (
              
              <tr>
              <td>{tarjeta.index}</td>
              <td>{tarjeta.titulo}</td>
              {/*<td>{tarjeta.descripcion}</td>*/}
              {/*<td >{tarjeta.imagen}</td>*/}
              <td>{tarjeta.condicion_tf &&
                  <p style={{                       
                    background: "transparent",              
                  }}>Vegetariana</p>
                  }
                  {!tarjeta.condicion_tf &&
                  <p  style={{                       
                    background: "transparent",              
                  }}>Contiene carne</p>
                  }                 
              </td>          
              <td>
                <Button color="warning" onClick={()=>this.mostrarModalModificar(tarjeta)}>Editar</Button>
                {" "}
                <Button color="danger" onClick={()=>this.eliminar(tarjeta)}>Borrar</Button>
              </td>          
             </tr>
      
            ))}

            </tbody>

        </Table>
      </Container>

    {/*MODAL PARA INSERTAR*/}
    <Modal isOpen={this.state.modalInsertar}>
         <ModalHeader>
           <div><h3>Nueva Receta</h3></div>
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
                Descripcion:
              </label>

              <input
                className="form-control"
                name = "descripcion"
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
                Link de Receta:
              </label>

              <input
                className="form-control"
                name = "link_receta"
                type="text"
                onChange = {this.handleChange}  
              />        
            </FormGroup>

            <FormGroup>
              <label>
                Marcar si la receta no contiene carne:
              </label>
                  <br />
              <input
                type="checkbox"
                name="condicion_tf"  
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
           <div><h3>Modificar Receta</h3></div>
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
                Descripcion:
              </label>

              <input
                className="form-control"
                name = "descripcion"
                type="text"
                onChange = {this.handleChange}  
                value={this.state.form.descripcion}  
              
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
                Link de Receta:
              </label>

              <input
                className="form-control"
                name = "link_receta"
                type="text"
                onChange = {this.handleChange}  
                value={this.state.form.link_receta}  
              />        
            </FormGroup>

            <FormGroup>
              <label>
              Marcar si la receta no contiene carne:
              </label>
                  <br />
              <input
                type="checkbox"
                name="condicion_tf"  
                onChange = {this.handleChange}  
                value={this.state.form.condicion_tf}      
               />   
            </FormGroup>

         </ModalBody>

        
            <ModalFooter>
              <Button color="primary" onClick={()=>this.modificar(this.state.form)} >Modificar</Button>
              <Button color="danger" onClick={()=>this.ocultarModalModificar()} >Cancelar</Button>
            </ModalFooter>


    </Modal>


     </>)
    
  }
}

  export default ABMTarjetas;
  
