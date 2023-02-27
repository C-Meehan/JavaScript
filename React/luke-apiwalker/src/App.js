import './App.css';
import {useState} from 'react'
import Search from './components/Search'
import Display from './components/Display'


function App() {

  // const [chosen, setChosen] = useState();
  // const [planet, setPlanet] = useState();
  const [results, setResults] = useState({});

  return (
    <div className="App">
      <Search results={results} setResults={setResults}/>
      <Display results={results}/>
    </div>
  );
}

export default App;
