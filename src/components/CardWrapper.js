import './CardWrapper.css';
import tarjetas from '../data/tarjetas.json' //IMPORTO LA DATA
import Card from './Card';

export default function CardWrapper({titulo}){
    
    {/*MEJOR FORMA DE DEVOLVER UN TAG*/}

    return(
        <>
        <h2>{titulo}</h2>

        <div className="grilla">

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

        {tarjetas.map((tarjeta, index) => (
          <Card 
            key={index}
            card={tarjeta}
          />
        ))}


         {/*<p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>
            <p><Card /></p>  */} 
        </div>
        </> 
    )
}