/*ESTADOS Y HOOKS*/
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function EjemploState(){

    //const [numero, setNumero] = useState(45);

    const [mostrar, setMostrar] = useState(false); //ES UN ARRAY


    return(
        <>
            <Button variant="warning" onClick={() => setMostrar(!mostrar)}>
                Mostrar
            </Button>

            {mostrar &&
                 <p>[Mensaje desde State]</p>
            }
        </>
    )
}