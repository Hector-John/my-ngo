import React, { useState } from 'react';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Volunteer registration data:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[10rem] pb-20 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Join Us as a Volunteer!</h1>
      <p className="mb-6 text-center">
        We are excited to have you on board! Fill out the form below to register as a volunteer.
      </p>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-700">Full Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary"
            placeholder="Enter your name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email Address</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary"
            placeholder="Enter your email"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary"
            placeholder="Enter your phone number"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary"
            placeholder="Why do you want to volunteer?"
            rows="4"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition duration-200"
        >
          Register as Volunteer
        </button>
      </form>
    </div>
  );
};

export default VolunteerPage;
