import React, { useState } from 'react';
import truck1 from '../assets/truck/truck1.jpg';

// ✅ Lucide icons
import { CheckCircle, Users, Award, Smile } from 'lucide-react';

// ✅ Stats data with component references
const stats = [
  { label: 'Projects Completed', value: '4500', Icon: CheckCircle },
  { label: 'Active Members', value: '54+', Icon: Users },
  { label: 'Award Winning', value: '14+', Icon: Award },
  { label: 'Satisfaction Rate', value: '100%', Icon: Smile },
];

// ✅ Testimonial
const testimonials = [
  {
    name: 'Rakesh Gupta',
    role: 'Professional',
    photo: truck1,
    text: 'My experience with Bina Logistics has been excellent.',
    rating: 5,
  },
];

export default function AboutUs() {
  const [idx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Hero */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-xl font-semibold">About Bina Logistics</h2>
          <h3 className="text-4xl font-bold text-stone-900 mb-4">Delivering Trust Since 2017</h3>
          <p className="text-stone-700 mb-6">
            Bina Logistics is your trusted partner for hassle-free and reliable cargo services. We deliver your goods safely and on time.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={truck1} alt="Truck" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      {/* Stats with improved hover effects */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-12">
        {stats.map((s, i) => {
          const { Icon } = s;
          return (
            <div
              key={i}
              className="group bg-white p-6 rounded-lg shadow-sm border border-transparent transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-red-50 hover:border-red-200 hover:ring-2 hover:ring-red-200 cursor-pointer"
            >
              <div className="flex justify-center mb-2">
                <div className="bg-red-100 p-2 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <div className="text-4xl font-bold text-red-500">{s.value}</div>
              <div className="text-stone-700 mt-2 group-hover:text-red-600 transition-colors duration-300">
                {s.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto bg-white mt-16 p-8 rounded-xl shadow-lg relative">
        <h3 className="text-3xl font-bold mb-4 text-center">What People Say</h3>
        <p className="text-stone-700 italic mb-6 text-center">“{t.text}”</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
          <div className="text-center sm:text-left">
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-sm text-stone-500">{t.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
