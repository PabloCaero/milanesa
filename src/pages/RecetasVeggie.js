/*PARA LLAMAR A COMPONENTES*/
import CardWrapperVeggie from '../components/CardWrapperVeggie';

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
        <h1>Recetas Vegetarianas</h1>   
        <br />

        <CardWrapperVeggie titulo={"[NOMBRE DE SITIO]"}/> 

        {/*<Contador />

        <EjemploEvento />

        <EjemploState />   

        <Clima />*/}
        </>
    )
}