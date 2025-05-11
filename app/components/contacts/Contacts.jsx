'use client';
import React from 'react';
// import Tiles from './Tiles'; // Social icons component

export default function Contact() {
  return (
    <section id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Social Tiles Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2">Join with me on</h3>
          
        </div>

        {/* Contact Form */}
        <div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-2 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="border border-gray-300 px-4 py-2 rounded-md"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 px-4 py-2 rounded-md"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
