/*import logo from './logo.svg';*/

/*PARA LLAMAR A COMPONENTES*/
import CardWrapper from './components/CardWrapper';

/*PARA NAVEGAR ENTRE PAGINAS*/
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Layout from './pages/Layout';
import MensajeError from './pages/MensajeError';

import './App.css';

function App() {
 
  return (

    <div className="App">
      {/*NAVEGACION ENTRE PAGINAS PARA RUTAS*/}
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />

          {/*SI LA RUTA NO COINCIDE CON NINGUNA DE LAS ANTERIORES, MUESTRA UN 404*/}
          <Route path="*" element={<MensajeError />}/>

        </Route>

      </Routes>

        <CardWrapper 
         titulo={"Menú"}
        
        />
    </div>
  );
}

export default App;
