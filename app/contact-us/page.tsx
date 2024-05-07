// pages/contact.tsx

import React from 'react';
import Head from 'next/head';

const Contact: React.FC = () => {
  return (
    <section id='section' className="pt-[150px] w-full bg-black">
       <div className=" text-white min-h-screen">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <ul>
              <li className="mb-4  text-[26px]">
                <span className="text-gray-500  ">Phone:</span> +91 9823546062
              </li>
              <li className="mb-4 text-[26px]">
                <span className="text-gray-500">Address:</span> Office no. 4, Yaad Building, Lane No. 1, Sahawas Society, Karve Nagar, Pune, Maharashtra 411052
              </li>
              <li className="mb-4 text-[26px]">
                <span className="text-gray-500">Email:</span> info@prizzminterriors.com
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full rounded-md bg-gray-800 border-none text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full rounded-md bg-gray-800 border-none text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 p-2 w-full rounded-md bg-gray-800 border-none text-white"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
