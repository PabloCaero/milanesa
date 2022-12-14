/*ESTADOS Y HOOKS*/
import { useState } from "react";

export default function EjemploState(){

    //const [numero, setNumero] = useState(45);

    const [mostrar, setMostrar] = useState(false);


    return(
        <>
            <button onClick={() => setMostrar(!mostrar)}>
                Mostrar
            </button>

            {mostrar &&
                 <p>Hola Mundo!</p>
            }
        </>
    )
}