//TREE SHAKING 
import {Link} from 'react-router-dom' /*PAQUETE QUE INSTALAMOS - LINK SERIA LO EQUIVALENTE A HREF */
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
           &nbsp
           <Link to="/">Home</Link> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}
           &nbsp
           <Link to="/nosotros">Nosotros</Link>      
           &nbsp
           <Link to="/juli">Mensajito oculto #9</Link>
           &nbsp
           <Link to="/abmtarjetas">ABM_Tarjetas</Link>

          </Nav>
        </Container>
      </Navbar>
      </>




        
    )
}