// ContactPage.jsx
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import contactImage from '../assets/contact.jpg'; // ✅ Import image here!

const ContactPage = () => {
  const ContactInfo = [
    {
      title: 'Delivery',
      email: 'example@gmail.com',
      phone: '+8(911)339-88-88',
      message: '+8(911)339-88-88',
    },
    {
      title: 'Support',
      email: 'example@gmail.com',
      phone: '+8(911)339-88-88',
      message: '+8(911)339-88-88',
    },
    {
      title: 'Careers',
      email: 'example@gmail.com',
      phone: '+8(911)339-88-88',
      message: '+8(911)339-88-88',
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          className="w-full object-cover brightness-50 filter lg:h-[500px]"
          src={contactImage} // ✅ Use imported image here
          alt="contact page"
        />
        <div className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact us</h1>
          <p className="mx-auto pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur aperiam natus, nulla, obcaecati nesciunt, itaque
            adipisci earum ducimus pariatur eaque labore.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="w-full flex-grow">
        <section className="mx-auto w-full my-6 grid max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3 lg:pt-10">
          {ContactInfo.map((info, index) => (
            <div key={index}>
              <div className="border py-5 shadow-md">
                <div className="flex justify-between px-4 pb-5">
                  <p className="text-xl font-bold">{info.title}</p>
                </div>
                <div className="flex flex-col px-4">
                  <a
                    className="flex items-center"
                    href={`mailto:${info.email}`}
                  >
                    <MdEmail className="mr-3 h-4 w-4 text-violet-900" />
                    {info.email}
                  </a>
                  <a className="flex items-center" href={`tel:${info.phone}`}>
                    <FaPhoneAlt className="mr-3 h-4 w-4 text-violet-900" />
                    {info.phone}
                  </a>
                  <a className="flex items-center" href={`sms:${info.message}`}>
                    <FaMessage className="mr-3 h-4 w-4 text-violet-900" />
                    {info.message}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mx-auto my-5 text-center">
          <h2 className="text-3xl font-bold">Have another question?</h2>
          <p>Complete the form below</p>
        </section>

        {/* Form */}
        <form className="mx-auto my-5 max-w-[600px] px-5 pb-10" action="">
          <div className="mx-auto">
            <div className="my-3 flex w-full gap-2">
              <input
                className="w-1/2 border px-4 py-2"
                type="email"
                placeholder="E-mail"
              />
              <input
                className="w-1/2 border px-4 py-2"
                type="text"
                placeholder="Full Name"
              />
            </div>
          </div>
          <select
            className="mb-3 w-full border px-4 py-2"
            name="category"
            id="category-select"
          >
            <option value="">Please choose a category</option>
            <option value="delivery">Delivery</option>
            <option value="support">Support</option>
            <option value="profile">Profile</option>
            <option value="careers">Careers</option>
            <option value="another">Another category</option>
          </select>
          <textarea
            className="w-full border px-4 py-2"
            placeholder="Write a commentary..."
            defaultValue={''}
          />
          <div className="lg:items:center container mt-4 flex flex-col justify-between lg:flex-row">
            <div className="flex items-center">
              <input className="mr-3" type="checkbox" id="checkbox_terms" />
              <label htmlFor="checkbox_terms">
                I have read and agree with
                <a href="#" className="text-violet-900">
                  {' '}
                  terms &amp; conditions
                </a>
              </label>
            </div>
            <button className="my-3 bg-amber-400 px-4 py-2 lg:my-0">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
