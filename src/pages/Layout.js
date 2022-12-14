import { Outlet } from "react-router-dom"
import Navegacion from "../components/Navegacion"
import Footer from '../pages/Footer';

export default function Layout(){
    return(
        <>

        <Navegacion /> {/* ELEMENTO FIJO QUE SE MUESTRA SIEMPRE */}
  
        <Outlet /> {/*  SE MUESTRA EL CONTENIDO DE CADA PAGINA - ES LO DINAMICO */}

        <Footer /> {/* ELEMENTO FIJO QUE SE MUESTRA SIEMPRE */}
        
        </>
    )
}