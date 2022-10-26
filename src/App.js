
import './App.css';
import List from './components/List'
import Nav from './components/Nav.js'
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Quote/>
        <List/>
    </div>
  );
}

export default App;
