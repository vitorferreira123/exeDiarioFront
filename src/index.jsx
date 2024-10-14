import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import Diario from './pages/diario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/diario' element={<Diario/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

