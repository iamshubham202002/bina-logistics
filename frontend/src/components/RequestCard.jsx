const RequestCard = ({ request, onAccept, onReject }) => {
  if (!request) return null;

  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-3 text-xl font-semibold text-gray-800">{request.freightType}</h2>
      <p className="text-gray-700"><span className="font-medium">Load:</span> {request.load}</p>
      <p className="text-gray-700"><span className="font-medium">City:</span> {request.city}</p>
      <p className="text-gray-700"><span className="font-medium">Name:</span> {request.name}</p>
      <p className="text-gray-700"><span className="font-medium">Phone:</span> {request.phone}</p>
      <p className="text-gray-700"><span className="font-medium">Email:</span> {request.email}</p>

      <div className="mt-4 flex justify-between gap-2">
        <button
          onClick={() => onReject?.(request._id)}
          className="rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
        >
          Reject
        </button>
        <button
          onClick={() => onAccept?.(request._id)}
          className="rounded-md bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RequestCard;