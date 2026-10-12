import React from 'react';
import { ArrowRight, Award, CheckCircle2, ShieldCheck, Truck, Users } from 'lucide-react';
import truck1 from '../assets/truck/truck1.jpg';

const stats = [
  { label: 'Shipments delivered', value: '45K+', icon: CheckCircle2 },
  { label: 'Client partners', value: '1500+', icon: Users },
  { label: 'Awards earned', value: '14+', icon: Award },
  { label: 'Safety record', value: '99.8%', icon: ShieldCheck },
];

const values = [
  'Transparent communication and reporting',
  'Reliable transport coordination at every mile',
  'Customized solutions for every customer',
  'Compliance, safety, and operational excellence',
];

const testimonial = {
  name: 'Rakesh Gupta',
  role: 'Operations Manager',
  text: 'Bina Logistics has been a dependable partner for our transport requirements. Their responsiveness, route planning, and careful handling have made a visible difference to our operations.',
};

export default function AboutUs() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">About us</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">Delivering trust through every shipment.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Bina Logistics was built around one simple promise: move cargo with reliability, care, and accountability. Over the years, we have become a dependable logistics partner for businesses that need efficient delivery and peace of mind.
            </p>
            <div className="mt-8 flex items-center gap-3 text-orange-300">
              <span className="font-semibold">Learn more</span>
              <ArrowRight size={18} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/30">
            <img src={truck1} alt="Bina Logistics truck" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/60">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Icon size={26} />
              </div>
              <div className="mt-5 text-3xl font-black text-slate-900">{value}</div>
              <div className="mt-2 text-sm text-slate-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
              <Truck size={28} />
            </div>
            <h2 className="text-3xl font-black">Why our clients trust us</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              We simplify logistics through dependable execution, proactive communication, and tailored solutions that fit the operational demands of our customers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-base font-medium text-slate-700 shadow-sm shadow-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">Client feedback</p>
          <blockquote className="mt-6 text-xl leading-9 text-slate-700 md:text-2xl">
            “{testimonial.text}”
          </blockquote>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <div>
              <div className="text-lg font-bold text-slate-900">{testimonial.name}</div>
              <div className="text-sm text-slate-500">{testimonial.role}</div>
            </div>
            <div className="text-right text-sm font-semibold text-orange-500">★★★★★</div>
          </div>
        </div>
      </section>
    </main>
  );
}
