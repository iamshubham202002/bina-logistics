import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutUs from './pages/About';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AdminPannel from './pages/AdminPannel';

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={ <Contact />} />
        <Route path='/about-us' element={ <AboutUs />} />
        <Route path='/admin-pannel' element={ <AdminPannel />} />
      </Routes>
      {/* Footer can be added here if needed */}
      {/* <Footer /> */} 
      <Footer />
     
    </div>
  );
};

export default App
