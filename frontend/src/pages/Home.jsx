import React from 'react';
import truck1 from '../assets/truck/truck1.jpg';  
import truck2 from '../assets/truck/truck2.jpg'; 
import truck3 from '../assets/truck/truck3.jpg'; 

const Home = () => {
  return (
    <div>
    {/*truck1 */}
    <div className='relative w-full h-screen'>
  <img src={truck1} alt="Truck 1" className='w-full h-full object-cover' />
  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
    <h2 className="text-blue-500 text-4xl md:text-6xl font-bold text-center duration-300">
      Welcome to Bina Logistics
    </h2>
    <p className='mt-4 text-white text-lg'>Shubham Pandey</p>
  </div>
</div>


      <img src={truck2} alt="Truck 2" />
      <img src={truck3} alt="Truck 3" />
      <p>home</p>
    </div>
  );
};

export default Home;
