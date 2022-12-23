/*ESTADOS Y HOOKS*/
import { useState } from "react";

export default function Contador(){

    const [cantidad, setCantidad] = useState(0); //ES UN ARRAY
    const precioUnitario = 500;

    function sumar(){
        setCantidad(cantidad+1);
    }

    function restar(){
        if(cantidad > 0){
             setCantidad(cantidad-1);            
        }      
    }   

    return(
        <>
            <button onClick={restar}>-</button>
                <p>{cantidad}</p>
            <button onClick={sumar}>+</button>    
            
            <h4>Total: ${cantidad*precioUnitario}</h4>
        </>
    )
}