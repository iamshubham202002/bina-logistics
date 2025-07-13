import RequestCard from "./RequestCard"

const requests = [
  { 
    _id: 1,
    freightType: "Road",
   load: 500,
   city: "Varanasi",
   name: "Prashant",
   phone: "9059302589"
  },
  { 
    _id: 2,
    freightType: "Rail",
   load: 1000,
   city: "Sonbhadra",
   name: "Nitesh",
   phone: "9059302589"
  },
  { 
    _id: 3,
    freightType: "Air",
   load: 500,
   city: "Varanasi",
   name: "Shubham",
   phone: "9059302589"
  },
  { 
    _id: 4,
    freightType: "Road",
   load: 500,
   city: "Jaunpur",
   name: "Mohan",
   phone: "9059302589"
  },
  { 
    _id: 5,
    freightType: "Air",
   load: 100,
   city: "Hinduari",
   name: "Raghav",
   phone: "9059302589"
  },
]

const Requests = () => {
  return (
    <div className="flex gap-5">
      {requests.map((item, index) => (<RequestCard type={item.freightType} load={item.load} city={item.city} name={item.name} phone={item.phone} />))}
    </div>
  )
}

export default Requests