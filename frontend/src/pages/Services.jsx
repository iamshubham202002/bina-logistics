import React, { useState } from 'react';

 
const Services = () => {

    const [freightType, setFreightType] = useState('');
  const [load, setLoad] = useState('');
  const [city, setCity] = useState('');
  const [yourName, setYourName] = useState('');
  const [yourPhone, setYourPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log({
      freightType,
      load,
      city,
      yourName,
      yourPhone,
    });
    alert('Request Submitted! Check console for data.');
    // You might also want to clear the form fields here
  };


  return (
    <div className='flex w-[100%]'>
      <div className='w-[50%]'>
         <h3 className='text-4xl text-center mt-20 font-bold'>Our Services :</h3>
         <p className='ml-25 mt-5 text-2xl'>At Bina Logistics, we offer end-to-end logistics solutions tailored to meet your business needs. Whether you're a small business or a large enterprise, our comprehensive services ensure your goods move efficiently, safely, and on time.</p>
         <ul className='list-disc pl-5'>
            <li className='ml-25 mt-5'><span className='font-bold text-xl'>Air Freight</span> – Fast and secure global delivery.</li>
            <li className='ml-25 mt-5'><span className='font-bold text-xl'>Sea Freight</span> – Cost-effective shipping for bulk cargo.</li>
            <li className='ml-25 mt-5'><span className='font-bold text-xl'>Road Freight</span> – Reliable transportation across domestic and cross-border routes.</li>
         </ul>
      </div>
      <div className='w-[50%] pt-20'>
         <div className="bg-[#333742] p-8 rounded-lg max-w-lg mx-auto text-white font-sans shadow-lg">
      <form onSubmit={handleSubmit}>
        {/* Freight Type */}
        <div className="mb-5">
          <label htmlFor="freightType" className="block text-sm font-bold mb-2">
            FREIGHT TYPE:
          </label>
          <div className="relative">
            <select
              id="freightType"
              className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md text-base appearance-none pr-10 focus:outline-none focus:border-blue-500"
              value={freightType}
              onChange={(e) => setFreightType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {/* Custom arrow for select */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Load */}
        <div className="mb-5">
          <label htmlFor="load" className="block text-sm font-bold mb-2">
            LOAD:
          </label>
          <div className="relative">
            <select
              id="load"
              className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md text-base appearance-none pr-10 focus:outline-none focus:border-blue-500"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
            >
              <option value="">Select</option>
              <option value="load1">Load 1</option>
              <option value="load2">Load 2</option>
            </select>
            {/* Custom arrow for select */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* City */}
        <div className="mb-5">
          <label htmlFor="city" className="block text-sm font-bold mb-2">
            CITY:
          </label>
          <div className="relative">
            <select
              id="city"
              className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md text-base appearance-none pr-10 focus:outline-none focus:border-blue-500"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option value="newYork">New York</option>
              <option value="losAngeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
            {/* Custom arrow for select */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Name and Phone Row */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="flex-1">
            <label htmlFor="yourName" className="block text-sm font-bold mb-2">
              YOUR NAME:
            </label>
            <input
              type="text"
              id="yourName"
              className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md text-base placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="yourPhone" className="block text-sm font-bold mb-2">
              YOUR PHONE:
            </label>
            <input
              type="tel"
              id="yourPhone"
              className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md text-base placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter Phone"
              value={yourPhone}
              onChange={(e) => setYourPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          SUBMIT REQUEST
        </button>
      </form>
    </div>
      </div>
    </div>
  )
}

export default Services