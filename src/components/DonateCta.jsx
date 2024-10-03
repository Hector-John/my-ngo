import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../constants/images";

const DonateCta = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-fixed bg-center bg-cover h-full lg:h-[50vh] "
      style={{
        backgroundImage: `url(${images.ctaBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="padded flex flex-col gap-8  items-center text-center h-full ">
        <div className="flex flex-col z-50 lg:w-[60%] mt-10 w-full ">
          <p className="text-[2.5rem] font-bold leading-12 text-white  ">
            Every small contribution counts.
          </p>
          <p className="text-[2.5rem] font-bold leading text-white ">
            Join us in making a difference.
          </p>
        </div>

        <div className="flex gap-6 items-center mb-12 lg:mt-0 ">
          <button
            className="btn2 rounded-md py-3 px-6  z-50  "
            onClick={() => navigate("/volunteer")}
          >
            Volunteer
          </button>
          <button
            className="btn3 rounded-md py-3 px-6  z-50  "
            onClick={() => navigate("/donate")}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCta;
