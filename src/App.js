import './App.css';
//import Album from './components/Album';
//import Menu from './components/Menu';
//import TracfficLight from './components/TracfficLight';
//import Hello from './components/Hello';
import Menu from './components/Menu';

function App() {
  // var listType = [
  //   { name: ['Item 1', 'Item 2', 'Item 3'], typeName: 'type', typeValue: '1', isRender: true },
  //   { name: ['Item 1', 'Item 2', 'Item 3'], typeName: 'type', typeValue: 'A', isRender: true },
  //   { name: ['Item 1', 'Item 2', 'Item 3'], typeName: 'type', typeValue: 'a', isRender: true },
  //   { name: ['Item 1', 'Item 2', 'Item 3'], typeName: 'type', typeValue: 'I', isRender: true },
  //   { name: ['Item 1', 'Item 2', 'Item 3'], typeName: 'type', typeValue: 'i', isRender: true },
  //   { name: ['Item 1', 'Item 2', 'Item 3'], typeName: 'start', typeValue: '24', isRender: true },
  // ]
  
  return (
    <div className="App">
      <header className="App-header">
      <p id="title">. . .T o d o s. . .</p>
        {
          Menu()
        }
      </header>
    </div>
  );
}

export default App;
