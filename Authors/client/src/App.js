import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<AllAuthors/>} path="/"/>
          <Route element={<CreateAuthor/>} path="/authors/create"/>
          <Route element={<UpdateAuthor/>} path="/authors/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
