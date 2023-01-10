import './CardWrapper.css';
import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import Card from './Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function CardWrapperVeggie({titulo}){
    
   

    /*MEJOR FORMA DE DEVOLVER UN TAG <> </>*/

    return(
      <center>
      <Row xs={1} md={4} className="g-2">
      
      
        
       

        {/*Cuando usamos un .map los elementos internos necesitan una propiedad "key" con un valor único. 
        Podemos utilizar un ID o el indice del array

        OPCION 1:
         {tarjetas.map((tarjeta, index) => (
          <p key={index}>{tarjeta.titulo}</p>
        ))}
        
        OPCION 2:
        {tarjetas.map(tarjeta => (
          <p key={tarjeta.id}>{tarjeta.titulo}</p>
        ))}

        */}

        {/*NO SE COMO HACER PARA QUE NO APAREZCAN LAS COL QUE NO TIENEN TARJETA :( */}
        {tarjetas.map((tarjeta, index) => (
          <Col>
          {tarjeta.condicion_tf &&
          <Card
            key={index}
            card={tarjeta}
          />
         }
          </Col>
        ))}


         {/*<p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>  */} 
        
        </Row>
        </center>
    )
}