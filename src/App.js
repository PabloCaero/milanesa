import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src="images/perrito.jpg" alt="Perrito"/ >
        <img src={logo} className="App-logo" alt="logo" /> {/* COMENTARIO */}
        <p>
          Edit <code>MILANESA</code> and save to reload.
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
