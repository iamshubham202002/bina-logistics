import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-4 text-2xl font-black uppercase tracking-[0.16em] text-white">Bina</div>
          <div className="mb-5 text-sm font-medium tracking-[0.28em] text-orange-300">LOGISTICS</div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            We move business forward with reliable freight, smarter warehousing, and on-time delivery solutions designed around your supply chain.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Phone: +91 87773 28142</li>
            <li>Email: binalogistics@gmail.com</li>
            <li>Address: Amani Pandeypur, Jaunpur</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl text-slate-300">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/shubham-pandey-ba9b28243/" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Bina Logistics. All Rights Reserved.</p>
          <p>Developed by Shubham Pandey</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
