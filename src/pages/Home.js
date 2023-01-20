/*PARA LLAMAR A COMPONENTES*/
import CardWrapper from '../components/CardWrapper';

/*EJEMPLO DE EVENTO*/
//import EjemploEvento from '../components/EjemploEvento';

/*ESTADOS Y HOOKS*/
//import EjemploState from '../components/EjemploState';

/*EJEMPLO CONTADOR*/
//import Contador from '../components/Contador';

/*FETCH*/
//import Clima from '../components/Clima'


export default function Home(){
    return(
        <>
        <br />
        <h1>Recetas Tradicionales</h1>   
        <br />

        <CardWrapper titulo={"[NOMBRE DE SITIO]"}/> 

        {/*<Contador />

        <EjemploEvento />

        <EjemploState />   

        <Clima />*/}
        </>
    )
}