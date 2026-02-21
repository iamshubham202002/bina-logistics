import { useEffect, useState } from "react";
import axios from "axios";

const Requests = () => {

  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/request/all");

      if (res.data.success) {
        setRequests(res.data.arr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const res = await axios.put(
        `http://localhost:3003/api/request/update-status/${id}`,
        { status }
      );

      if (res.data.success) {
        alert("Updated Successfully");
        fetchRequests();
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 space-y-4">
      {requests.length === 0 ? (
        <h2>No Pending Requests</h2>
      ) : (
        requests.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow">
            <p><b>Name:</b> {item.name}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Phone:</b> {item.phone}</p>
            <p><b>Freight:</b> {item.freightType}</p>
            <p><b>Load:</b> {item.load}</p>
            <p><b>City:</b> {item.city}</p>

            <div className="mt-3 flex gap-3">
              <button
                onClick={() => updateStatus(item._id, "Accepted")}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Accept
              </button>

              <button
                onClick={() => updateStatus(item._id, "Rejected")}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Requests;
