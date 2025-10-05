
const RequestCard = ({type, load, city, name, phone}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{type}</h2>
      <p className="text-gray-700"><span className="font-medium">Load:</span> {load}</p>
      <p className="text-gray-700"><span className="font-medium">City:</span> {city}</p>
      <p className="text-gray-700"><span className="font-medium">Name:</span> {name}</p>
      <p className="text-gray-700"><span className="font-medium">Phone:</span> {phone}</p>

      <div className="flex justify-between mt-4 gap-2">
        <button
          
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Reject
        </button>
        <button
          
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default RequestCard