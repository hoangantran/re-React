import './App.css';
//import Album from './components/Album';
//import Menu from './components/Menu';
//import TracfficLight from './components/TracfficLight';
import Hello from './components/Hello';
//import Accordion from './components/Accordion';
//import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          Hello()
        }
      </header>
    </div>
  );
}

export default App;
