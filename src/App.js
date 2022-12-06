/*import logo from './logo.svg';*/
import Title from './components/Title';
import Mascota from './components/Mascota';
import Card from './components/Card';
import './App.css';

function App() {
 {/*BUCLES*/}
 const numeros = [45, 78, 12, 787, 341];


  return (
    <div className="App">

       {/*BUCLES*/}

        {numeros.map(numero => (
          <p>El número es: {numero}</p>
        ))}

        {/*Llamada a Componentes*/}

        <Title 
        titulo={"Hola, te hablo desde el parametro titulo"}
        subtitulo={"Hola, te hablo desde el parametro subtitulo"}
        />
       
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
