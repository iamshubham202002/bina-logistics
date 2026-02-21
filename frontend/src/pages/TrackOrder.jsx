import { useState } from "react";
import axios from "axios";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/orders/track/${orderId}`
      );
      setOrder(res.data);
      setError("");
    } catch (err) {
      setError("Order not found");
      setOrder(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold mb-6">Track Your Order</h2>

      <input
        type="text"
        placeholder="Enter Order ID"
        className="border p-3 rounded w-80"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />

      <button
        onClick={handleTrack}
        className="bg-red-500 text-white px-6 py-2 mt-4 rounded"
      >
        Track
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {order && (
        <div className="mt-6 bg-gray-100 p-6 rounded shadow-md w-96">
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Current Location:</strong> {order.location}</p>
          <p><strong>Estimated Delivery:</strong> {new Date(order.estimatedDelivery).toDateString()}</p>
        </div>
      )}
    </div>
  );
}
