/*PARA LLAMAR A COMPONENTES*/
import CardWrapper from '../components/CardWrapper';

/*EJEMPLO DE EVENTO*/
import EjemploEvento from '../components/EjemploEvento';

/*ESTADOS Y HOOKS*/
import EjemploState from '../components/EjemploState';


export default function Home(){
    return(
        <>

        <h1>[HOMEPAGE]</h1>   

        <EjemploEvento />

        <EjemploState />   

        <CardWrapper titulo={"[NOMBRE DE SITIO]"}/> 

        </>
    )
}