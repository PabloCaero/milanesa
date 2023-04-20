//TREE SHAKING 
import {Link} from 'react-router-dom' /*PAQUETE QUE INSTALAMOS - LINK SERIA LO EQUIVALENTE A HREF */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  NavLink  from 'react-bootstrap/NavLink';


export default function Navegacion(){



  
    return(

     <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Recetas Simples 🍕</Navbar.Brand>
          <Nav className="me-auto">

           <NavLink eventKey="1" as={Link} to="/">Home</NavLink> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}

           <NavLink eventKey="2" as={Link} to="/recetas">Recetas Tradicionales</NavLink> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}

           <NavLink eventKey="3" as={Link}  to="/recetasveggie">Recetas Vegetarianas</NavLink> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}
        
           <NavLink eventKey="4" as={Link} to="/nosotros">Nosotros</NavLink>

           <NavLink eventKey="6" as={Link} to="/contacto">Contacto</NavLink>
          
           <NavLink eventKey="7" as={Link} to="/abmtarjetas">Administrar Recetas</NavLink>

           {/*<NavLink eventKey="8" as={Link} to="/juli">Comodín 🫶</NavLink>*/}

          </Nav>
        </Container>
      </Navbar>
      </>




        
    )
}