//TREE SHAKING 
//import {Link} from 'react-router-dom' /*PAQUETE QUE INSTALAMOS - LINK SERIA LO EQUIVALENTE A HREF */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navegacion(){
    return(

        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">[PÁGINA WEB]</Navbar.Brand>
          <Nav className="me-auto">
           
           <Nav.Link href="/">Home</Nav.Link> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}
           <Nav.Link href="/nosotros">Nosotros</Nav.Link>      
           <Nav.Link href="/juli">Mensajito oculto #9</Nav.Link>
           <Nav.Link href="/agregartarjeta">Agregar Tarjeta</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </>




        
    )
}