import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white
    dark:bg-black text-black dark:text-white">
  
      <Navbar />
      <Home />
    </div>
  );
};

export default App
