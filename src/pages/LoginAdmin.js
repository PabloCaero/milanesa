
import ABMTarjetas from './ABMTarjetas';
import usuarios from '../data/admin.json' //IMPORTO LA DATA
import {Button, Modal, ModalHeader, FormGroup, ModalFooter, ModalBody} from 'reactstrap';
import React from 'react';



class LoginAdmin extends React.Component{

  //ESTADOS 
  state = {
    modalLogin: true,

    form:{
      index: '',
      usuario: '',
      password: ''   
    }
  }

  //LOGICA PARA INGRESO A PERFIL ADMIN
  ingresoAdmin=(dato)=>{
    

    var listaUsuario = usuarios;
    var banderaIngreso = false;
    var banderaCamposIncompletos = false;
    
    listaUsuario.forEach((usuario)=>{
      
      
      if(dato.usuario==="" || dato.password === ""){
        banderaCamposIncompletos = true;
      }
      else{
        banderaCamposIncompletos = false;
      }
      
      
      if(dato.usuario===usuario.usuario && dato.password === usuario.password){
        var mensaje = "Bienvenido/a " + usuario.nombre + " 😺";
        alert(mensaje);
        banderaIngreso = true;
        banderaCamposIncompletos = false;
        this.setState({modalLogin:false});
      }

    });
    
    //ESTOS ARREGLOS EVITAN QUE EL FOREACH ALERTE MENSAJES REPETIDOS
    if(banderaCamposIncompletos){
      alert("Por favor, complete los campos requeridos")
    }

    if(!banderaIngreso && !banderaCamposIncompletos){
      alert("Datos incorrectos 😔 Intente nuevamente")
    }
   }


   //PARA CERRAR EL MODAL
   regresar=()=>{
    window.history.back();
   }

   //PARA TOMAR DATOS SEGUN NAME DE LOS TAGS
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

      <ABMTarjetas/>

      <Modal isOpen={this.state.modalLogin}>
        <ModalHeader>
           <div><h3>Ingreso Administrador</h3></div>
         </ModalHeader>

         <ModalBody>
          

            <FormGroup>
             
              <input
                className="form-control"
                name = "usuario"
                type="text"
                placeholder='Usuario'
                onChange = {this.handleChange}  
                value={this.state.form.usuario}  
                required
                       
              />        
            </FormGroup>

            <FormGroup>
             
              <input
                className="form-control"
                name = "password"
                type="password"
                placeholder='Contraseña'
                onChange = {this.handleChange}  
                value={this.state.form.password}  
                required
             
              />        
            </FormGroup>


         </ModalBody>

        
            <ModalFooter>
              <Button color="primary" onClick={()=>this.ingresoAdmin(this.state.form)} >Login</Button>
              <Button color="danger" onClick={()=>this.regresar()} >Cancelar</Button>
            </ModalFooter>
        </Modal>

      </>
    )
  }

}

export default LoginAdmin;
