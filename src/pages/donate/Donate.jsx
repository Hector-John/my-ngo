import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donated amount:", amount);
    setAmount('');
  };

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
      <div className="bg-white rounded-lg mb-20 mt-[8rem] p-8 max-w-md w-full shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Make a Donation</h2>
        <p className="text-center text-mutedForeground mb-6">
          Your support helps us continue our mission to make a positive impact in the community. Every contribution, no matter the size, helps us to provide essential resources and support to those in need. Thank you for your generosity!
        </p>

        <div className="flex items-center justify-evenly mb-4">
          <button onClick={() => handleAmountSelect(50)} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-primary hover:text-white transition">50</button>
          <button onClick={() => handleAmountSelect(100)} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-primary hover:text-white transition">100</button>
          <button onClick={() => handleAmountSelect(200)} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-primary hover:text-white transition">200</button>
          <button onClick={() => handleAmountSelect(1000)} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-primary hover:text-white transition">1000</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Or enter your own amount ($)</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="block w-full mt-1 border border-gray-300 rounded-md p-2"
              placeholder="Enter amount"
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition duration-200"
          >
            Donate Now
          </button>
        </form>

        <p className="mt-4 text-center text-mutedForeground">
          Thank you for considering a donation. Your contribution is vital to our efforts and helps us to serve the community better.
        </p>
      </div>
    </div>
  );
};

export default Donate;
