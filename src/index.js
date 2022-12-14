import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*PARA PODER NAVEGAR ENTRE PAGINAS NECESITAMOS LO SIGUIENTE*/
import { BrowserRouter } from 'react-router-dom';

/*BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons/ai';
import 'react-jsonschema-form';

import background from './pages/fondo.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ 
    backgroundImage: `url(${background})` 
  }}>

  <React.StrictMode>
    {/* INTERNACIONALIZACION */}

    {/* LLAMO AL COMPONENTE PARA NAVEGAR ENTRE PAGINAS */}

    <BrowserRouter>
      <App/>
    </BrowserRouter>

   
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
