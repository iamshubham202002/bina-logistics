import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import axios from 'axios';


const Requests = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    async function fetch() {
      
       const res = await axios.get("http://localhost:3003/api/request/all");

      if (res.data.success) {
        setRequests(res.data.arr);
        console.log(requests);

        console.log("true");
        
        
      } else {
        console.log(res.data.message);
        console.log("false");
      }
    }

   fetch();

  },[]);

  return (
    <div className="flex gap-5">
      {requests.map((item, index) => (<RequestCard type={item.freightType} load={item.load} city={item.city} name={item.name} phone={item.phone} />))}
    </div>
  )
}

export default Requests