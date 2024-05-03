// pages/contact.tsx

import React from 'react';
import Head from 'next/head';

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for any queries or feedback." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} className="mt-1 p-2 w-full border rounded"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <div className="border p-4 rounded">
              <h2 className="text-lg font-semibold mb-2">FAQ</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="text-blue-500 font-semibold">Q: How can I contact support?</h3>
                  <p className="text-gray-600">You can contact our support team by filling out the form on this page.</p>
                </div>
                <div>
                  <h3 className="text-blue-500 font-semibold">Q: What are your working hours?</h3>
                  <p className="text-gray-600">Our support team is available from Monday to Friday, 9 AM to 6 PM.</p>
                </div>
                {/* Add more FAQ items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
