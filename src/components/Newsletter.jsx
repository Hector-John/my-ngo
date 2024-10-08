import React from "react";

const Newsletter = () => {
  return (
    <div className="relative bg-green-900 lg:h-[40vh] py-12">
      <div className="padded flex flex-col lg:flex-row justify-between items-center h-full">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-white uppercase text-2xl font-bold playfair mb-1">
            Subscribe to our newsletter
          </h1>
          <p className="text-white subtitle">
            Stay updated with our latest news and offers. Join our community!
          </p>
        </div>

        <div className="flex mt-4 lg:mt-0">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent text-white border-b border-white focus:outline-none py-2 px-3"
          />
          <button className="rounded- bg-white text-black py-2 px-4 ml-6 rounded-full ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
