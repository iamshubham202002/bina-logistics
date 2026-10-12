import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight, Plane, ShipWheel, Truck, ShieldCheck, Clock3, PackageCheck } from 'lucide-react';
import airfreightImg from '../assets/airfright.jpg';
import seaFreightImg from '../assets/seafright.jpg';
import roadFreightImg from '../assets/roadfright.jpg';

const Services = () => {
  const [freightType, setFreightType] = useState('');
  const [load, setLoad] = useState('');
  const [city, setCity] = useState('');
  const [yourName, setYourName] = useState('');
  const [yourPhone, setYourPhone] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const serviceList = [
    {
      title: 'Air Freight',
      description: 'Fast, secure, and time-sensitive cargo movement for urgent shipments and international deliveries.',
      image: airfreightImg,
      icon: Plane,
    },
    {
      title: 'Sea Freight',
      description: 'Cost-effective ocean logistics for large-volume consignments, imports, and exports.',
      image: seaFreightImg,
      icon: ShipWheel,
    },
    {
      title: 'Road Freight',
      description: 'Reliable domestic and intercity transport solutions tailored for business continuity.',
      image: roadFreightImg,
      icon: Truck,
    },
  ];

  const features = [
    { icon: ShieldCheck, title: 'Secure handling', text: 'Careful cargo management and safety-focused operations.' },
    { icon: Clock3, title: 'On-time delivery', text: 'Clear schedule planning to keep your supply chain moving.' },
    { icon: PackageCheck, title: 'End-to-end support', text: 'From pickup coordination to final destination, we handle it.' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!freightType || !load || !city || !yourName || !yourPhone || !yourEmail) {
      alert('Please fill all fields');
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/request/submit`, {
        freightType,
        load,
        city,
        name: yourName,
        phone: yourPhone,
        email: yourEmail,
      });

      if (res.data.success) {
        alert('Request submitted successfully!');
        setFreightType('');
        setLoad('');
        setCity('');
        setYourName('');
        setYourPhone('');
        setYourEmail('');
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Our solutions</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">Logistics services tailored to your business.</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            From urgent air shipments to large-scale road freight, Bina Logistics creates practical transport strategies that keep your business efficient and your cargo protected.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceList.map(({ title, description, image, icon: Icon }) => (
            <div key={title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
              <img src={image} alt={title} className="h-56 w-full object-cover" />
              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Why businesses choose us</p>
              <h2 className="mt-4 text-3xl font-black">Built for reliability, speed, and accountability.</h2>
            </div>

            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 lg:p-10">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Request a quote</p>
              <h2 className="mt-3 text-3xl font-black">Tell us about your shipment</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Freight type</label>
                <select
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                  value={freightType}
                  onChange={(e) => setFreightType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Sea Freight">Sea Freight</option>
                  <option value="Road Freight">Road Freight</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Load size</label>
                <select
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                  value={load}
                  onChange={(e) => setLoad(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Light">Light</option>
                  <option value="Medium">Medium</option>
                  <option value="Heavy">Heavy</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">City</label>
                <select
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Select city</option>
                  <option value="Jaunpur">Jaunpur</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Varanasi">Varanasi</option>
                </select>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Name</label>
                  <input
                    type="text"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Phone</label>
                  <input
                    type="tel"
                    value={yourPhone}
                    onChange={(e) => setYourPhone(e.target.value)}
                    placeholder="Phone"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Email</label>
                  <input
                    type="email"
                    value={yourEmail}
                    onChange={(e) => setYourEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:opacity-70"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
