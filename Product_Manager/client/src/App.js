import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

// import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<ProductDetail/>} path='/products/:id' />
            <Route element={<UpdateProduct/>} path='/products/edit/:id' />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
