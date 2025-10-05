import React, { useState } from 'react';
import airfreightImg from '../assets/airfright.jpg';
import seaFreightImg from '../assets/seafright.jpg';
import roadFreightImg from '../assets/roadfright.jpg';

const Services = () => {
  const [freightType, setFreightType] = useState('');
  const [load, setLoad] = useState('');
  const [city, setCity] = useState('');
  const [yourName, setYourName] = useState('');
  const [yourPhone, setYourPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      freightType,
      load,
      city,
      yourName,
      yourPhone,
    });
    alert('Request Submitted! Check console for data.');
  };

  return (
    <div className='flex flex-col lg:flex-row w-full'>
      {/* LEFT SIDE: Services Info */}
      <div className='w-full lg:w-1/2 p-6'>
        <h3 className='text-4xl text-center mt-10 font-bold'>Our Services :</h3>
        <p className='mt-5 text-xl'>
          At Bina Logistics, we offer end-to-end logistics solutions tailored to meet your business needs.
          Whether you're a small business or a large enterprise, our comprehensive services ensure your goods
          move efficiently, safely, and on time.
        </p>
        <ul className='mt-8 space-y-6'>
          <li className='flex items-start gap-4'>
            <img src={airfreightImg} alt="Air Freight" className='w-20 h-20 rounded-md shadow-md object-cover' />
            <div>
              <span className='font-bold text-xl'>Air Freight</span> – Fast and secure global delivery.
            </div>
          </li>
          <li className='flex items-start gap-4'>
            <img src={seaFreightImg} alt="Sea Freight" className='w-20 h-20 rounded-md shadow-md object-cover' />
            <div>
              <span className='font-bold text-xl'>Sea Freight</span> – Cost-effective shipping for bulk cargo.
            </div>
          </li>
          <li className='flex items-start gap-4'>
            <img src={roadFreightImg} alt="Road Freight" className='w-20 h-20 rounded-md shadow-md object-cover' />
            <div>
              <span className='font-bold text-xl'>Road Freight</span> – Reliable transportation across domestic and cross-border routes.
            </div>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className='w-full lg:w-1/2 pt-10 px-6'>
        <div className="bg-[#333742] p-8 rounded-lg max-w-lg mx-auto text-white font-sans shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* FREIGHT TYPE */}
            <div className="mb-5">
              <label htmlFor="freightType" className="block text-sm font-bold mb-2">FREIGHT TYPE:</label>
              <select
                id="freightType"
                className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                value={freightType}
                onChange={(e) => setFreightType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="air">Air Freight</option>
                <option value="sea">Sea Freight</option>
                <option value="road">Road Freight</option>
              </select>
            </div>

            {/* LOAD */}
            <div className="mb-5">
              <label htmlFor="load" className="block text-sm font-bold mb-2">LOAD:</label>
              <select
                id="load"
                className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                value={load}
                onChange={(e) => setLoad(e.target.value)}
              >
                <option value="">Select</option>
                <option value="load1">Load 1</option>
                <option value="load2">Load 2</option>
              </select>
            </div>

            {/* CITY */}
            <div className="mb-5">
              <label htmlFor="city" className="block text-sm font-bold mb-2">CITY:</label>
              <select
                id="city"
                className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="newYork">New York</option>
                <option value="losAngeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            {/* NAME & PHONE */}
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex-1">
                <label htmlFor="yourName" className="block text-sm font-bold mb-2">YOUR NAME:</label>
                <input
                  type="text"
                  id="yourName"
                  className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                  placeholder="Enter Name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="yourPhone" className="block text-sm font-bold mb-2">YOUR PHONE:</label>
                <input
                  type="tel"
                  id="yourPhone"
                  className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                  placeholder="Enter Phone"
                  value={yourPhone}
                  onChange={(e) => setYourPhone(e.target.value)}
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition duration-300"
            >
              SUBMIT REQUEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
