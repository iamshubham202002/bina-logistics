import React, { useState } from "react";
import axios from "axios";
import airfreightImg from "../assets/airfright.jpg";
import seaFreightImg from "../assets/seafright.jpg";
import roadFreightImg from "../assets/roadfright.jpg";

const Services = () => {
  const [freightType, setFreightType] = useState("");
  const [load, setLoad] = useState("");
  const [city, setCity] = useState("");
  const [yourName, setYourName] = useState("");
  const [yourPhone, setYourPhone] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!freightType || !load || !city || !yourName || !yourPhone || !yourEmail) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

     const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/request/submit`,
  { freightType, load, city, name: yourName, phone: yourPhone, email: yourEmail }
);

      if (res.data.success) {
        alert("Request submitted successfully!");

        // Reset form
        setFreightType("");
        setLoad("");
        setCity("");
        setYourName("");
        setYourPhone("");
        setYourEmail("");
      } else {
        alert(res.data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-4xl text-center mt-10 font-bold">
          Our Services :
        </h3>

        <p className="mt-5 text-xl">
          At Bina Logistics, we offer end-to-end logistics solutions tailored
          to meet your business needs. Whether you're a small business or a
          large enterprise, our comprehensive services ensure your goods move
          efficiently, safely, and on time.
        </p>

        <ul className="mt-8 space-y-6">
          <li className="flex items-start gap-4">
            <img
              src={airfreightImg}
              alt="Air Freight"
              className="w-20 h-20 rounded-md shadow-md object-cover"
            />
            <div>
              <span className="font-bold text-xl">Air Freight</span> – Fast and
              secure global delivery.
            </div>
          </li>

          <li className="flex items-start gap-4">
            <img
              src={seaFreightImg}
              alt="Sea Freight"
              className="w-20 h-20 rounded-md shadow-md object-cover"
            />
            <div>
              <span className="font-bold text-xl">Sea Freight</span> –
              Cost-effective shipping for bulk cargo.
            </div>
          </li>

          <li className="flex items-start gap-4">
            <img
              src={roadFreightImg}
              alt="Road Freight"
              className="w-20 h-20 rounded-md shadow-md object-cover"
            />
            <div>
              <span className="font-bold text-xl">Road Freight</span> –
              Reliable transportation across domestic and cross-border routes.
            </div>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-full lg:w-1/2 pt-10 px-6">
        <div className="bg-[#333742] p-8 rounded-lg max-w-lg mx-auto text-white font-sans shadow-lg">
          <form onSubmit={handleSubmit}>
            
            {/* FREIGHT TYPE */}
            <div className="mb-5">
              <label className="block text-sm font-bold mb-2">
                FREIGHT TYPE:
              </label>
              <select
                className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                value={freightType}
                onChange={(e) => setFreightType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Sea Freight">Sea Freight</option>
                <option value="Road Freight">Road Freight</option>
              </select>
            </div>

            {/* LOAD */}
            <div className="mb-5">
              <label className="block text-sm font-bold mb-2">LOAD:</label>
              <select
                className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                value={load}
                onChange={(e) => setLoad(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
              </select>
            </div>

            {/* CITY */}
            <div className="mb-5">
              <label className="block text-sm font-bold mb-2">CITY:</label>
              <select
                className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>

            {/* NAME / PHONE / EMAIL */}
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex-1">
                <label className="block text-sm font-bold mb-2">
                  YOUR NAME:
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                  placeholder="Enter Name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-bold mb-2">
                  YOUR PHONE:
                </label>
                <input
                  type="tel"
                  className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                  placeholder="Enter Phone"
                  value={yourPhone}
                  onChange={(e) => setYourPhone(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-bold mb-2">
                  YOUR EMAIL:
                </label>
                <input
                  type="email"
                  className="w-full p-3 bg-[#4B5263] border border-[#5A606F] rounded-md"
                  placeholder="Enter Email"
                  value={yourEmail}
                  onChange={(e) => setYourEmail(e.target.value)}
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "SUBMIT REQUEST"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
