
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Principal(){
    return(
      
            <>
            <br /><br /><br />
            <Container fluid="md">
      <Row>
        <Col><a href="/home"><Button variant='primary' style={{
          height: "600px",
          width: "200px",
        }}>Recetas</Button></a></Col>
        <Col><a href="/recetasveggie"><Button variant='success' style={{
          height: "600px",
          width: "200px",
        }}>Recetas Veggies</Button></a></Col>
        <Col><Button variant='warning'style={{
          height: "600px",
          width: "200px",
        }}>Recetas Veganas</Button></Col>
        <Col>  <Button variant='danger'style={{
          height: "600px",
          width: "200px",
        }}>Postres y Tortas</Button></Col>
      </Row>
      <br /><br /><br /> <br /><br />
    </Container>
            
            
            
            
          
     
            
            </>
    )
}