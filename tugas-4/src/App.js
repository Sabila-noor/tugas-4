import logo from './logo.svg';
import './App.css';
import Tombol from './component/Tombol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tugas 4 React js - Sabila</h1>
        <Tombol name = "Sabila"/>
        <Tombol name = "Noor"/>
        <Tombol name = "Sania"/>
      </header>
    </div>
  );
}

export default App;
