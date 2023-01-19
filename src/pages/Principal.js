import {CardImg, Card, CardTitle, CardText, CardBody,CardSubtitle, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom' 


export default function Principal(){
    return(
      
       
        <>
        <br />
        <h1>Recetas Simples 🍕</h1>   
        <br />
      <Row >
        <Col>
        <center>
  <Card color="light">
    <CardImg
      alt="Card image cap"
      src="https://pbs.twimg.com/media/FLmCVEnXoAEYsU4.jpg:large"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Recetas Tradicionales
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        🍔
      </CardSubtitle>
      <CardText>
      Te ofrecemos en esta sección alternativas para la elaboración de platos tremendos y fáciles de realizar.
      </CardText>
      <Link to="/recetas">Ver recetas</Link>
    </CardBody>
  </Card>
  </center>
  </Col>

<Col>
<center>
  <Card color="light">
    <CardImg
      alt="Card image cap"
      src="https://aprende.com/wp-content/uploads/2020/07/cursos-de-comida-vegetariana-.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Recetas Vegetarianas
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        🥕
      </CardSubtitle>
      <CardText>
      Si optas por aquellas comidas que excluyen carne, productos cárnicos y pescado, seleccionamos una variedad de sencillas recetas para vos!
      </CardText>

      

      <Link to="/recetasveggie">Ver recetas</Link>
     
    </CardBody>
  </Card>
  </center>
  </Col>

  <Col>
<center>
  <Card color="light">
    <CardImg
      alt="Card image cap"
      src="https://w0.peakpx.com/wallpaper/337/202/HD-wallpaper-cake-dessert-berry-berries-desserts-cakes.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Postres y Tortas
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
      🍰
      </CardSubtitle>
      <CardText>
      <br />
      <br />
      Próximamente
      <br />
      <br />
      <br />
      </CardText>
      <Link to="#">Ver recetas</Link>
    </CardBody>
  </Card>
  </center>
  </Col>

  <Col>
<center>
  <Card color="light">
    <CardImg
      alt="Card image cap"
      src="https://i.blogs.es/eb3704/gluten-free/450_1000.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Recetas sin T.A.C.C.
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
         🚫🍞
        
      </CardSubtitle>
      <CardText>
      <br />
      <br />
      Próximamente
      <br />
      <br />
      <br />
      </CardText>
      <Link to="#">Ver recetas</Link>
    </CardBody>
  </Card>
  </center>
  </Col>


  </Row>
  </>


    )
}