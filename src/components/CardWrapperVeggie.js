import './CardWrapper.css';
import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import Card from './CardDesign';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function CardWrapperVeggie({titulo}){
    
   

    /*MEJOR FORMA DE DEVOLVER UN TAG <> </>*/

    return(
      <center>
      <Row xs={1} md={4} className="g-2">
      
      
        


        {/*10/01/2022
        
        -COMO HACER PARA QUE NO APAREZCAN LAS COL QUE NO TIENEN TARJETA :(
        -ICONS CON URLS EXTERNAS?
        -TRABAJAR ESTILO DEL NAVBAR (ESTA)
        -FALTANTES: LOGIN
                    PAGINA HOME DE BIENVENIDA
                    ¿QUE API USAR?
 
          
          */}
        {tarjetas.map((tarjeta, index) => {
          if(tarjeta.condicion_tf){
          return (<Col><Card
            key={index}
            card={tarjeta}
          /></Col>)
          
         }
         else{
          return null;
         }
      })}


        </Row>
        </center>
    )
}