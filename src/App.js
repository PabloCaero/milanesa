/*import logo from './logo.svg';*/
import Title from './components/Title';
import Mascota from './components/Mascota';
import './App.css';

function App() {
  return (
    <div className="App">

        {/*Llamada a Componentes*/}
        <Title />
        <Mascota />

      <header className="App-header">

      

        <img src="images/perrito.jpg" alt="Perrito"/ >
        
        <p>
          Editar <code>MILANESA</code> y guardar para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
