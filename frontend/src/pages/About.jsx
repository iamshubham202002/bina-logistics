import React, { useState } from 'react';

const stats = [
  { label: 'Project Completed', value: '4500' },
  { label: 'Active Members', value: '54+' },
  { label: 'Award Winning', value: '14+' },
  { label: 'Satisfaction Rate', value: '100%' },
];

const testimonials = [
  {
    name: 'Rakesh Gupta',
    role: 'Professional',
    photo: '/truck1.jpg',
    text: 'My experience of transporting my logistics through Mahakal Cargo is very satisfactory...',
    rating: 5
  },
  // add more
];

export default function AboutUs() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Hero */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-xl font-semibold">About Bina Logistics</h2>
          <h3 className="text-4xl font-bold text-stone-900 mb-4">We Provide Since 2017</h3>
          <p className="text-stone-700 mb-6">
            Welcome to the official website of Bina Logistics...
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/truck.jpg" alt="Truck on road" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid gap-6 mt-12 md:grid-cols-2">
        {[
          { title: 'Our Mission', text: 'Until our mission (skill development)...' },
          { title: 'Our Vision', text: 'The path from dreams to success does exist...' },
        ].map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
            <p className="text-stone-600">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-red-500">{s.value}</div>
            <div className="text-stone-700 mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto bg-white mt-16 p-8 rounded-xl shadow-lg relative">
        <h3 className="text-3xl font-bold mb-4">What People Say About Our Company</h3>
        <p className="text-stone-700 italic mb-6">“{t.text}”</p>
        <div className="flex items-center space-x-4">
          <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full" />
          <div>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-sm text-stone-500">{t.role}</p>
          </div>
        </div>
        {/* Rating */}
        <div className="mt-4 flex space-x-1">
          {Array.from({ length: 5 }).map((_, i2) => (
            <svg key={i2} className={`w-6 h-6 ${i2 < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c..."/>
            </svg>
          ))}
        </div>
        {/* Arrows */}
        <button onClick={() => setIdx((idx-1+testimonials.length)%testimonials.length)} className="absolute left-4 top-1/2 bg-teal-800 text-white p-3 rounded-full">◀</button>
        <button onClick={() => setIdx((idx+1)%testimonials.length)} className="absolute right-4 top-1/2 bg-teal-800 text-white p-3 rounded-full">▶</button>
      </div>
    </section>
  );
}
