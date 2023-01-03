//TREE SHAKING 
import {Link} from 'react-router-dom' /*PAQUETE QUE INSTALAMOS - LINK SERIA LO EQUIVALENTE A HREF */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navegacion(){
    return(

        <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">[PÁGINA WEB]</Navbar.Brand>
          <Nav className="me-auto">

          <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}
         
            <Nav.Link href="#"><Link to="/nosotros">Nosotros</Link> </Nav.Link>

           <Nav.Link href="#"><Link to="/juli">Pista 👀</Link></Nav.Link>
          
           <Nav.Link href="#"><Link to="/abmtarjetas">Administrar Elementos</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </>




        
    )
}