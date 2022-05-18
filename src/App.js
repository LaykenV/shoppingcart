import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import About from './components/about';
import Shop from './components/shop';
import Home from './components/home';
import Error from './components/errorPage';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
