"use client"; // Add this line to mark this component as client-side

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Normally, you would send the form data to a backend or API here
  };

  return (
    <div id="contact">
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-full md:w-full bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-start justify-start relative">
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Karachi, Pakistan</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a href="mailto:Maryamsaleem20102001@gmail.com" className="text-gray-950 leading-relaxed">Maryamsaleem20102001@gmail.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">033320731744</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded py-2 px-4 text-gray-700 outline-none transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded py-2 px-4 text-gray-700 outline-none transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded py-2 px-4 text-gray-700 outline-none transition-colors duration-200 ease-in-out"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 font-medium text-lg text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 focus:outline-none rounded-full transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    {/* Skills Section */}
    <div className="container px-5 py-24 mx-auto">
      <h2 className="text-3xl font-serif text-gray-900 mb-6"> Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
          <p className="text-gray-600 mt-2">Experienced in HTML, CSS, JavaScript, TypeScript, and React.js. Passionate about building responsive and user-friendly websites.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">UI/UX Design</h3>
          <p className="text-gray-600 mt-2">Skilled in creating intuitive designs that provide a seamless user experience using tools like Figma, Adobe XD, and Sketch.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">SEO & Marketing</h3>
          <p className="text-gray-600 mt-2">Knowledgeable in SEO best practices and digital marketing strategies to improve website visibility and drive traffic.</p>
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="container px-5 py-24 mx-auto">
      <h2 className="text-3xl font-serif text-gray-900 mb-6"> Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Website Development</h3>
          <p className="text-gray-600 mt-2">I offer custom website development, ensuring your site is responsive, fast, and user-friendly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">E-commerce Solutions</h3>
          <p className="text-gray-600 mt-2">Build your online store with secure payment gateways and an easy-to-use interface for customers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Graphic Design</h3>
          <p className="text-gray-600 mt-2">Design custom logos, social media graphics, and other marketing materials to make your brand stand out.</p>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}
