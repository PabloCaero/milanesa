/*PARA LLAMAR A COMPONENTES*/
import CardWrapperVeggie from '../components/CardWrapper';

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

        <h1>Recetas</h1>   

        <CardWrapperVeggie titulo={"[NOMBRE DE SITIO]"}/> 

        {/*<Contador />

        <EjemploEvento />

        <EjemploState />   

        <Clima />*/}
        </>
    )
}