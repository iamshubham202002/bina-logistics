import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Services', path: '/services' },
    { id: 3, text: 'Tools', path: '/tools' },
    { id: 4, text: 'Contact Us', path: '/contact-us' },
    { id: 5, text: 'About Us', path: '/about-us' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setNav(false);
  };

  return (
    <>
      {/* Fixed Navbar with blur + smooth transition */}
      <div
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur transition-all duration-500 ${
          isScrolled ? 'bg-red-700/90 shadow-md' : 'bg-red-600/60'
        }`}
      >
        <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigate('/')}>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-contain transition-transform duration-500 hover:rotate-6"
            />
            <span className="text-xl font-bold text-white">Bina Logistics</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavigate(item.path)}
                className={`relative px-2 py-1 cursor-pointer group transition duration-300 ${
                  location.pathname === item.path ? 'text-[#00df9a]' : ''
                }`}
              >
                {item.text}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#00df9a] transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div onClick={handleNav} className="block md:hidden cursor-pointer text-white">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`fixed top-0 left-0 w-[70%] h-full bg-red-700/95 backdrop-blur text-white border-r border-gray-700 z-50 transform transition-transform duration-500 ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-600">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">Bina Logistics</span>
            </div>
            <AiOutlineClose size={24} onClick={handleNav} className="cursor-pointer" />
          </div>
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className={`p-4 border-b border-gray-600 cursor-pointer transition duration-300 ${
                location.pathname === item.path ? 'bg-[#00df9a] text-black' : 'hover:bg-[#00df9a] hover:text-black'
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
