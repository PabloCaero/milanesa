import './Card.css';
/*EJEMPLO DE EVENTO*/
import EjemploEvento from './EjemploEvento';

//CARD RECIBE UN OBJETO CON LOS DATOS. EL OBJETO SE LLAMA "card"
export default function Card({card}){

    return(

        <div className="card">
            <img className="card-img" src={card.imagen} alt=""/>
            <div className="card-info">
             <h3 className="card-info_titulo">{card.titulo}</h3>
             <p className="card-info_precio">${card.precio}</p>
             {/*CONDICIONALES (CONDITIONAL RENDERING)*/}
             {/*Para mas de una condicion envio_gratis && precio < 200 && ESTO SERÍA COMO UN ENTONCES*/}  
                 {card.precio > 20000 &&
                    <p className="gratis">OH POR DIOS 🙀 </p> 
                 }
                 {!card.envio_gratis &&
                    <p className="gratis">¡No es gratis :C !</p> 
                 }

            

            </div>   
            
            <EjemploEvento />

        </div>
        )
}