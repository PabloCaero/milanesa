import './Card.css';

export default function Card(){

    let imagen = 'images/perrito.jpg';
    let titulo = 'Telefono celular';
    let precio = 2000;
    /*SE PUEDEN HACER OPERACIONES ACA*/
    let precio_descuento = precio * 0.8;
    
    let envio_gratis = false;

    return(

        <div className="card">
            <img className="card-img" src={imagen} alt=""/>
            <div className="card-info">
             <h3 className="card-info_titulo">{titulo}</h3>
             <p className="card-info_precio">${precio}</p>
             {/*CONDICIONALES (CONDITIONAL RENDERING)*/}
             {/*Para mas de una condicion envio_gratis && precio < 200 && ESTO SERÍA COMO UN ENTONCES*/}  
                 {precio > 20000 &&
                    <p className="gratis">OH POR DIOS 🙀 </p> 
                 }
                 {!envio_gratis &&
                    <p className="gratis">¡No es gratis :C !</p> 
                 }

            

            </div>   

        </div>
        )
}