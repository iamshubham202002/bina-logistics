import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={"Contact US"} />
      </Routes>
    </div>
  );
};

export default App
