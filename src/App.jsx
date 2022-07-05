import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
// import Carrinho from './pages/Carrinho';
// import Produto from './pages/Produto';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}
