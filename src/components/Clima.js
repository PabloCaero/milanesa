/*FETCHS*/
import { useEffect, useState } from "react";

export default function Clima(){

    const [cargando, setCargando] = useState(true); //APENAS CARGA EL COMPONENTE ESTO ESTA CARGANDO

    const[clima, setClima] = useState({});//{} CON ESTO PREPARAMOS A ATAJAR 

    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=-41.155047050887816&lon=-71.88736757608339&appid=0df39b4b9d9ed1e00543bfc269eb773f&units=metric&lang=es";
    
    useEffect(()=>{
        //ACA HACEMOS EL FETCH A LA URL
        //LO QUE SEA QUE DEVUELVA EL FETCH LO GUARDO EN respuesta

        fetch(URL).then(respuesta => {
            if(respuesta.ok){
                //FUNCIONO
                respuesta.json().then(clima => {
                    console.log(clima);
                    //GUARDO EL CLIMA EN MI STATE
                    setClima(clima);
                    //APAGO EL GARGANDO
                    setCargando(false);
                });
            }
            else{
                console.error("OOPS, ALGO FALLÓ", respuesta.statusText);
            }
        });

    }, []); //[] INDICA QUE CONSTANTEMENTE LLAMA A LA API

    //PUEDE USARSE UN CONDICIONAL
    if(cargando){
        return(
            <p>Cargando...</p>
        )
    }

    return(
        <>
           {cargando &&
                <p>Cargando...</p>
           }

           {!cargando &&
            <>
                <h2>{clima.name}</h2>
                <p>La temperatura en {clima.name} es de {clima.main.temp} y {clima.weather[0].description}</p>
            </>
           }
        </>
    )
}