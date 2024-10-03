import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../constants/images";

const DonateCta = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div
      className="relative bg-fixed bg-center bg-cover h-[30vh] lg:h-[45vh] "
      style={{
        backgroundImage: `url(${images.ctaBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="padded flex justify-between items-center h-full ">
        <div className="flex flex-col gap-2 z-50 w-[60%] ">
          <p className="text-[2.5rem] font-bold leading-12 text-white  ">
            Every small contribution counts
          </p>
          <p className="text-[2.5rem] font-bold leading text-white ">
            Join us in making a difference
          </p>
        </div>

        <button
          className="btn3 py-3 px-6 rounded-full z-50 transform scale-150 "
          onClick={() => navigate("/donate")}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonateCta;
