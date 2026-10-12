import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, ShieldCheck, ShipWheel, Truck, Warehouse, Gauge, Route, PackageCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import truck1 from '../assets/truck/truck1.jpg';
import truck2 from '../assets/truck/truck2.jpg';
import train from '../assets/train.jpg';

const serviceCards = [
  {
    icon: Truck,
    title: 'Road Freight',
    description: 'Flexible, dependable transportation for regional and national cargo movement.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Secure storage and inventory handling with advanced visibility and accuracy.',
  },
  {
    icon: ShipWheel,
    title: 'Ocean & Air Cargo',
    description: 'Global shipping coordination for import, export, and time-sensitive consignments.',
  },
  {
    icon: Route,
    title: 'Last Mile',
    description: 'Fast distribution for retail, industrial, and enterprise deliveries.',
  },
];

const stats = [
  { label: 'On-time deliveries', value: '96%' },
  { label: 'Active clients', value: '1,500+' },
  { label: 'Fleet strength', value: '250+' },
  { label: 'Years of experience', value: '12+' },
];

const process = [
  'Discuss your shipping requirements',
  'Get optimized route and pricing',
  'Track movement in real time',
  'Deliver securely and on schedule',
];

const features = [
  'Dedicated logistics coordinators',
  'Real-time shipment visibility',
  'Flexible fleet for every cargo size',
  'Transparent pricing and updates',
  'Secure handling and compliance',
  'End-to-end supply chain support',
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/70" />
        <img src={truck1} alt="Logistics truck" className="h-[760px] w-full object-cover" />

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 backdrop-blur-sm">
              Trusted supply chain partner
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Smarter freight,<br /> stronger delivery.
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
              Bina Logistics helps businesses move freight faster, safer, and more efficiently with full-service transportation and warehousing solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/918777328142?text=Hi%20Bina%20Logistics%2C%20I%20want%20a%20shipping%20quote."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Request a quote
                <ArrowRight size={18} />
              </a>

              <a
                href="/track-order"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
              >
                Track shipment
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="mt-2 text-xs text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-right" className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 lg:p-12">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
              <ShieldCheck size={28} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Why choose us</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Dependable movement, transparent service.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              From first mile to final delivery, we manage every step of your shipment with speed, accountability, and care. That means fewer delays, less stress, and better control over your supply chain.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
            <img src={truck2} alt="Cargo truck" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">Our services</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Logistics solutions built around your business</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map(({ icon: Icon, title, description }) => (
              <div key={title} data-aos="zoom-in" className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right" className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
            <img src={train} alt="Rail freight" className="h-full w-full object-cover" />
          </div>

          <div data-aos="fade-left" className="flex flex-col justify-center rounded-[2rem] bg-slate-100 p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">How we work</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">A smoother process from pickup to destination</h2>

            <div className="mt-8 space-y-5">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm shadow-slate-200">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex items-center text-slate-700">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-300">Performance promise</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">Fast decisions. Safer handling. Reliable delivery.</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Clock3 className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <div className="text-lg font-semibold">Faster transit planning</div>
                    <p className="mt-1 text-sm text-slate-300">Optimized routing and proactive ETA updates to reduce delays.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <PackageCheck className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <div className="text-lg font-semibold">Careful cargo handling</div>
                    <p className="mt-1 text-sm text-slate-300">Professional packing and secure movement for every shipment type.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Gauge className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <div className="text-lg font-semibold">Operational visibility</div>
                    <p className="mt-1 text-sm text-slate-300">Stay informed with accurate updates and transparent communication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/30">
              <h3 className="text-xl font-bold text-white">Need a custom shipping solution?</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Tell us about your cargo, route, and deadlines. Our team will prepare a personalized plan for your logistics needs.
              </p>

              <a
                href="https://wa.me/918777328142?text=Hi%20Bina%20Logistics%2C%20I%20need%20a%20custom%20shipping%20solution."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
