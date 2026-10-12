import React from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import contactImage from '../assets/contact.jpg';

const ContactInfo = [
  {
    title: 'Delivery',
    email: 'binalogistics@gmail.com',
    phone: '8777328142',
    message: '8777328142',
    icon: Mail,
  },
  {
    title: 'Support',
    email: 'pandeyshubham9021@gmail.com',
    phone: '9219669642',
    message: '9219669642',
    icon: Phone,
  },
  {
    title: 'Location',
    email: 'Amani Pandeypur, Jaunpur',
    phone: 'Jaunpur, Uttar Pradesh',
    message: 'Open Mon-Sat',
    icon: MapPin,
  },
];

const ContactPage = () => {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative">
        <img src={contactImage} alt="Contact Bina Logistics" className="h-[320px] w-full object-cover brightness-50 md:h-[420px]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Contact us</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">Let’s move your business forward.</h1>
            <p className="mt-5 text-base leading-8 text-slate-200">
              Need a shipping solution or a quick logistics consultation? Connect with our team and we’ll help you find the best option.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {ContactInfo.map(({ title, email, phone, message, icon: Icon }) => (
            <div key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/70">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Icon size={26} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <span>{email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <span>{message}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 md:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Send a message</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Have another question?</h2>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-orange-400" type="text" placeholder="Full name" />
              <input className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-orange-400" type="email" placeholder="Email address" />
            </div>

            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-orange-400" name="category" id="category-select">
              <option value="">Please choose a category</option>
              <option value="delivery">Shipping enquiry</option>
              <option value="support">Support</option>
              <option value="careers">Careers</option>
              <option value="another">Other</option>
            </select>

            <textarea className="min-h-[170px] w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-orange-400" placeholder="Write your message..." />

            <div className="flex flex-col justify-between gap-4 pt-2 md:flex-row md:items-center">
              <label className="flex items-center gap-3 text-sm text-slate-300">
                <input type="checkbox" className="h-4 w-4 accent-orange-500" />
                I agree to the terms and conditions.
              </label>
              <button type="submit" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
