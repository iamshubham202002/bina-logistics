import { useEffect, useState } from 'react';
import axios from 'axios';
import RequestCard from './RequestCard';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/request/all`);

      if (res.data.success) {
        setRequests(res.data.arr || []);
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
        `${import.meta.env.VITE_API_URL}/api/request/update-status/${id}`,
        { status }
      );

      if (res.data.success) {
        alert('Updated Successfully');
        fetchRequests();
      } else {
        alert(res.data.message || 'Could not update request');
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong while updating the request');
    }
  };

  return (
    <div className="space-y-4 p-5">
      {requests.length === 0 ? (
        <h2>No Pending Requests</h2>
      ) : (
        requests.map((item) => (
          <RequestCard
            key={item._id}
            request={item}
            onAccept={(id) => updateStatus(id, 'Accepted')}
            onReject={(id) => updateStatus(id, 'Rejected')}
          />
        ))
      )}
    </div>
  );
};

export default Requests;
