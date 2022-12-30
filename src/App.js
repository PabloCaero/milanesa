/*import logo from './logo.svg';*/


/*PARA NAVEGAR ENTRE PAGINAS*/
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Layout from './pages/Layout';
import Juli from './pages/Juli';
import AgregarTarjeta from './pages/AgregarTarjeta';


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
          <Route path="juli" element={<Juli />} />
          <Route path="agregartarjeta" element={<AgregarTarjeta />} />

          {/*SI LA RUTA NO COINCIDE CON NINGUNA DE LAS ANTERIORES, MUESTRA UN 404*/}
          <Route path="*" element={<MensajeError />}/>

        </Route>

      </Routes>

      
    </div>
  );
}

export default App;
