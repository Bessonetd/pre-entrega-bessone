// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Greeting from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/> 
      </header>
      <main>
        <Greeting/>
      </main>
        
    </div>
  );
}

export default App;
