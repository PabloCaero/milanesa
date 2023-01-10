import './CardWrapper.css';
import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import Card from './Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function CardWrapper({titulo}){
    
   

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

        {tarjetas.map((tarjeta, index) => {
          if(!tarjeta.condicion_tf){
          return (<Col><Card
            key={index}
            card={tarjeta}
          /></Col>)
          
         }
         else{
          return null;
         }
      })}


         {/*<p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>  */} 
        
        </Row>
        </center>
    )
}