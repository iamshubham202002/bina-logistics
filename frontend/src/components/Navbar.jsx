import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Services', path: '/services' },
    { id: 3, text: 'Contact Us', path: '/contact-us' },
    { id: 4, text: 'About Us', path: '/about-us' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setNav(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/90 shadow-lg shadow-slate-900/20 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => handleNavigate('/')}
          >
            <img src={logo} alt="Bina Logistics logo" className="h-12 w-12 rounded-full object-contain bg-white/10 p-1" />
            <div>
              <div className="text-lg font-black tracking-[0.14em] text-white uppercase">Bina</div>
              <div className="text-xs font-medium tracking-[0.28em] text-slate-300">Logistics</div>
            </div>
          </div>

          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavigate(item.path)}
                className={`cursor-pointer transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-orange-400' : 'hover:text-white'
                }`}
              >
                {item.text}
              </li>
            ))}

            <li
              onClick={() => handleNavigate('/track-order')}
              className={`cursor-pointer rounded-full border px-4 py-2 font-semibold transition-all duration-200 ${
                location.pathname === '/track-order'
                  ? 'border-orange-400 bg-orange-400 text-slate-950'
                  : 'border-white/30 bg-transparent text-white hover:border-orange-400 hover:text-orange-300'
              }`}
            >
              Track Order
            </li>
          </ul>

          <div onClick={() => setNav(!nav)} className="block cursor-pointer text-white md:hidden">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-40 h-full w-[80%] max-w-xs bg-slate-950/95 p-6 text-white transition-transform duration-300 md:hidden ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-contain bg-white/10 p-1" />
            <div>
              <div className="text-base font-black uppercase tracking-[0.14em]">Bina</div>
              <div className="text-[10px] tracking-[0.22em] text-slate-300">LOGISTICS</div>
            </div>
          </div>
          <AiOutlineClose size={22} onClick={() => setNav(false)} className="cursor-pointer" />
        </div>

        <ul className="space-y-2 text-base">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className={`rounded-xl px-4 py-3 transition ${
                location.pathname === item.path ? 'bg-orange-400 text-slate-950 font-semibold' : 'hover:bg-white/5'
              }`}
            >
              {item.text}
            </li>
          ))}
          <li
            onClick={() => handleNavigate('/track-order')}
            className={`rounded-xl px-4 py-3 transition ${
              location.pathname === '/track-order' ? 'bg-orange-400 text-slate-950 font-semibold' : 'hover:bg-white/5'
            }`}
          >
            Track Order
          </li>
        </ul>
      </div>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
