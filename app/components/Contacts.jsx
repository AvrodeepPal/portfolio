'use client';
import Image from 'next/image';
import { assets } from '../assets/home/assets';

export default function Contact() {
  return (
    <section id="contact" className="bg-white-50 w-full px-[12%] py-16 scroll-mt-20">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-[#fdd017]">Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">I'd love to hear from you! Let’s create something great together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="pr-6">
            <p className="text-lg text-gray-600 mb-12">
              Reach out to me for collaboration, freelancing, or any inquiries. I’m always open to meaningful conversations.
            </p>

            <div className="flex items-start mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                <Image src={assets.location} alt="location" width={20} height={20} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">7/23 Poddar Nagar, Jadavpur</p>
                <p className="text-gray-600">Kolkata, India</p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                <Image src={assets.calling} alt="phone" width={20} height={20} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91 85838 42681</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                <Image src={assets.email} alt="email" width={20} height={20} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">avrodeep.pal17@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap bg-white rounded-lg p-6 md:p-12 shadow">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Any message for me?</h2>
            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdd017]"
                required
              />

              <div className="flex flex-col xl:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdd017]"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdd017]"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdd017]"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#fdd017] text-white px-6 py-3 font-medium rounded-md hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
