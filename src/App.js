import Home from './Home';
import React from 'react';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';




function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
