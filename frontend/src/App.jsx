import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutUs from './pages/About';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={ <Contact />} />
        <Route path='/about-us' element={ <AboutUs />} />
        <Route path='/admin-panel' element={ <AdminPanel />} />
        <Route path='/not-found' element={ <NotFound />} />
      </Routes>
      {/* Footer can be added here if needed */}
      {/* <Footer /> */} 
      <Footer />
     
    </div>
  );
};

export default App
