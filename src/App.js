/*import logo from './logo.svg';*/
import Title from './components/Title';
import Mascota from './components/Mascota';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">

        {/*Llamada a Componentes*/}
        <Title />
        <Mascota />
        <Card />

      <header className="App-header">

      

        <img src="images/milanesa.png" alt="Milanesa"/ >
        
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
