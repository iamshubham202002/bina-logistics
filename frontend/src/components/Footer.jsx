import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-11/12">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Bina Logistics</h1>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Phone: 8777328142</p>
            <p>Email: binalogistics@gmail.com</p>
            <p>Address: Amani Pandeypur Pariyat Jaunpur</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-600" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Freight Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Warehousing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Supply Chain Management
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
