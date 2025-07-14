import { useState } from "react";
import Requests from "../components/Requests";
import Packages from "../components/Packages";
import axios from "axios";


const AdminPanel = () => {

   const [content, setContent] = useState("Requests");
   const [isVerfied, setIsVerifed] = useState(false);

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log('Username:', username);
      console.log('Password:', password);

      const res = await axios.post("http://localhost:3003/api/request/is-admin", {username, password});
      if (res.data.success) {
        setIsVerifed(true);
      } else {
        alert("invalid credentials")
      }
   };

   const fetchRequests = () => {
      setContent("Requests");
   }

   const fetchPackages = () => {
      setContent("Packages");
   }

  return (
   
      isVerfied ? (<div className="flex">
      <div className='min-h-screen border border-black w-50 flex flex-col'>
         <button onClick={fetchRequests} className='border border-gray-600 p-3 hover:bg-gray-600'>Requests</button>
         <button onClick={fetchPackages} className='border border-gray-600 p-3 hover:bg-gray-600'>Packages</button>
      </div>
      <div>
         {content === "Requests" ? <Requests /> : <Packages />}
      </div>
    </div>)
     : 
     (<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>)
   
    
  )
}

export default AdminPanel