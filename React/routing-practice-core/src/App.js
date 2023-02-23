import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
// import Word from './components/Word';
import WordColor from './components/WordColor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:num" element={<Number/>}/>
          {/* <Route path="/:word" element={<Word/>}/> */}
          <Route path="/:someword/:color1/:color2" element={<WordColor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
