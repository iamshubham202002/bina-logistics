import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // adjust the threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Services' },
    { id: 3, text: 'Tools' },
    { id: 4, text: 'Contact Us' },
    { id: 5, text: 'About Us' }
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-red-700 shadow-md' : 'bg-red-600'}`}>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Bina Logistics" className="h-12 w-12 object-contain" />
          <span className="text-xl font-bold">Bina Logistics</span>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-4'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-2 hover:bg-[#00df9a] hover:text-black rounded-xl cursor-pointer duration-300'
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed top-0 left-0 w-[60%] h-full bg-red-700 text-white border-r border-gray-800 z-50 transform transition-transform duration-500 ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='flex items-center justify-between px-4 py-4 border-b border-gray-600'>
            <img src={logo} alt="Logo" className='w-10 h-10 object-contain' />
            <span className='text-xl font-bold'>Bina Logistics</span>
            <AiOutlineClose size={24} onClick={handleNav} className='cursor-pointer' />
          </div>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b border-gray-600 hover:bg-[#00df9a] hover:text-black cursor-pointer duration-300'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
