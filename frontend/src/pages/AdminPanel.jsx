import { useState } from "react";
import Requests from "../components/Requests";
import Packages from "../components/Packages";


const AdminPanel = () => {

   const [content, setContent] = useState("Requests");

   const fetchRequests = () => {
      setContent("Requests");
   }

   const fetchPackages = () => {
      setContent("Packages");
   }

  return (
    <div className="flex">
      <div className='min-h-screen border border-black w-50 flex flex-col'>
         <button onClick={fetchRequests} className='border border-gray-600 p-3 hover:bg-gray-600'>Requests</button>
         <button onClick={fetchPackages} className='border border-gray-600 p-3 hover:bg-gray-600'>Packages</button>
      </div>
      <div>
         {content === "Requests" ? <Requests /> : <Packages />}
      </div>
    </div>
  )
}

export default AdminPanel