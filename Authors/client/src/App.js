import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorDetail from './components/AuthorDetail';

function App() {
  return (
    <div className="App">
      <h1 className='col-md-6 mx-auto'>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<AllAuthors/>} path="/"/>
          <Route element={<CreateAuthor/>} path="/authors/create"/>
          <Route element={<UpdateAuthor/>} path="/authors/edit/:id"/>
          <Route element={<AuthorDetail/>} path='/authors/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
