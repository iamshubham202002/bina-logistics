import React, { useEffect } from 'react';
import { TruckIcon, TrainIcon , MessageCircleIcon} from 'lucide-react'; // You can use lucide or heroicons
import AOS from 'aos';
import 'aos/dist/aos.css';

import truck1 from '../assets/truck/truck1.jpg';
import truck2 from '../assets/truck/truck2.jpg';
import train from '../assets/train.jpg';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative w-full h-screen">
        <img
          src={truck1}
          alt="Truck 1"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-wider drop-shadow-lg">
            Welcome to <span className="text-blue-500">Bina Logistics</span>
          </h2>
          <p className="mt-4 text-white text-lg tracking-wide drop-shadow">
            Nikhil Pandey
          </p>
       <a
  href="https://wa.me/918777328142?text=Hi%2C%20I%20am%20Nikhil%20Pandey%2C%20and%20I%20am%20interested%20in%20getting%20a%20quote."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
>
  <MessageCircleIcon className="w-5 h-5" />
  Chat on WhatsApp
</a>

        </div>
      </div>

      {/* Truck Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-8">
        <img
          src={truck2}
          alt="Truck 2"
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          data-aos="fade-right"
        />
        <div
          className="mt-8 md:mt-0 md:ml-8 max-w-md"
          data-aos="fade-left"
        >
          <TruckIcon className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            About our road transport
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Bina Logistics is your trusted partner for hassle-free and reliable cargo services. We deliver your goods safely and on time. Our experienced team ensures your shipments are handled with care, giving you peace of mind every step of the way.
            Whether you need local or long-distance transport, we have the expertise and resources to meet your needs. From small packages to large freight, we handle it all with professionalism and efficiency.
          </p>
        </div>
      </div>

      {/* Train Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-8">
        <div
          className="flex justify-start w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
          data-aos="fade-right"
        >
          <img
            src={train}
            alt="Train"
            className="w-full h-64 object-cover object-left rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="max-w-md" data-aos="fade-left">
          <TrainIcon className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 tracking-wide">
            About our rail transport
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our rail transport services provide an efficient and eco-friendly solution for moving your cargo across long distances. With access to major rail networks, Bina Logistics ensures timely and secure delivery of bulk goods and heavy freight.
            We coordinate every aspect of your rail shipments, offering you cost-effective options while maintaining the highest standards of safety and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
