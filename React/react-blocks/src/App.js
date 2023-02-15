import './App.css';
import './Components.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header><Header/></header>
      <div className="content">
        <div><Navigation/></div>
        <div><Main/></div>
      </div>
    </div>
  );
}

export default App;
