//TREE SHAKING 
import {Link} from 'react-router-dom' /*PAQUETE QUE INSTALAMOS - LINK SERIA LO EQUIVALENTE A HREF */



export default function Navegacion(){
    return(
        <ul>
           <li><Link to="/">Home</Link></li> {/*PARA QUE RESPETE LA RAIZ SOLO ES LA BARRITA EN LA HOME*/}
           <li><Link to="/nosotros">Nosotros</Link></li>      
           <li><Link to="/juli">Mensajito oculto #9</Link></li>
        
        </ul>
    )
}