'use client';
import Image from 'next/image';
import { assets } from '../assets/home/assets';
import { useState } from 'react';

export default function Contact({ isDark }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'

  const showToastMessage = (type, message) => {
    setToastType(type);
    setResult(message);
    setShowToast(true);
    
    // Auto-hide toast after 10 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "78f6d9d8-39e1-454f-976b-81c97531756a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showToastMessage('success', "Message sent successfully! Will contact back asap!");
        event.target.reset();
      } else {
        console.log("Error", data);
        showToastMessage('error', data.message || "Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      showToastMessage('error', "Network error! Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`w-full px-[12%] py-20 scroll-mt-0 ${isDark ? 'bg-[#171717]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Toast Notification */}
        {showToast && (
          <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            toastType === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-medium">{result}</span>
              <button 
                onClick={() => setShowToast(false)}
                className="ml-4 text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-[#fdd017]">Contact</p>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? 'text-[#ffffff]' : 'text-gray-900'} mb-4`}>Get in Touch</h2>
          <p className={`text-xl ${isDark ? 'text-[#ffffff]' : 'text-gray-600'}`}>I'd love to hear from you! Let's create something great together.</p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Contact Info */}
          <div className="pr-6">
            <p className={`text-lg ${isDark ? 'text-[#ffffff]' : 'text-gray-600'} mb-12`}>
              Reach out to me for collaboration, freelancing, or any inquiries. I'm always open to meaningful conversations.
            </p>

            {/* Address */}
            <div className="flex items-start mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                <Image src={assets.location} alt="location" width={20} height={20} />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDark ? 'text-[#ffffff]' : 'text-gray-900'} mb-1`}>Address</h3>
                <p className={`${isDark ? 'text-[#ffffff]' : 'text-gray-600'}`}>7/23 Poddar Nagar, Jadavpur</p>
                <p className={`${isDark ? 'text-[#ffffff]' : 'text-gray-600'}`}>Kolkata, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                <Image src={assets.calling} alt="phone" width={20} height={20} />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDark ? 'text-[#ffffff]' : 'text-gray-900'} mb-1`}>Phone</h3>
                <p className={`${isDark ? 'text-[#ffffff]' : 'text-gray-600'}`}>+91 85838 42681</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                <Image src={assets.email} alt="email" width={20} height={20} />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${isDark ? 'text-[#ffffff]' : 'text-gray-900'} mb-1`}>Email</h3>
                <p className={`${isDark ? 'text-[#ffffff]' : 'text-gray-600'}`}>avrodeep.pal17@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form with Skewed Cards */}
          <div className="relative">
            {/* Skewed Back Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffe31f] to-[#ff1e1e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl z-0"></div>

            {/* Front Form Card */}
            <div className={`relative z-10 ${isDark ? 'bg-[#333333]' : 'bg-[#fffccf]'} rounded-3xl p-6 md:p-10 shadow-xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-[#ffffff]' : 'text-gray-900'}`}>Any message for me?</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full rounded-md border ${isDark ? 'border-gray-600 bg-[#171717] text-[#ffffff] placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e]`}
                  required
                  disabled={isSubmitting}
                />

                <div className="flex flex-col xl:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`flex-1 rounded-md border ${isDark ? 'border-gray-600 bg-[#171717] text-[#ffffff] placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e]`}
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={`flex-1 rounded-md border ${isDark ? 'border-gray-600 bg-[#171717] text-[#ffffff] placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e]`}
                    disabled={isSubmitting}
                  />
                </div>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className={`w-full rounded-md border ${isDark ? 'border-gray-600 bg-[#171717] text-[#ffffff] placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e]`}
                  required
                  disabled={isSubmitting}
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 font-semibold rounded-md transition ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#ff1e1e] hover:bg-red-600'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}