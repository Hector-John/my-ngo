import React from "react";
import { useNavigate } from "react-router-dom";
import { LuHelpingHand } from "react-icons/lu";
import { MdHealthAndSafety } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";

const Goals = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 h-full items-center pt-[10%] lg:h-screen">
      <div className="padded">
        <div className="text-center flex flex-col justify-center mb-6">
          <h1 className="text-primary uppercase font-bold text-[.85rem] mb-2">
            All around the country
          </h1>
          <p className="text-3xl font-semibold text-center text-[#121212]">
            Our Organization's Goals
          </p>
        </div>

        <div className=" text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {/* Health */}
          <div className="card bg-white py-12 px-4 gap-6 rounded-md flex flex-col items-center shadow-md transition-transform duration-300 transform hover:scale-105">
            <MdHealthAndSafety size={100} style={{ color: "#06D666" }} />
            <p className="font-bold text-xl">Good Health</p>
            <p
              onClick={() => navigate("/about")}
              className="cursor-pointer text-accent font-light border-b-2 border-accent transition duration-300 hover:text-primary hover:border-primary"
            >
              Learn More
            </p>
          </div>

          {/* Partnerships */}
          <div className="card bg-white py-12 px-4 gap-6 rounded-md flex flex-col items-center shadow-md transition-transform duration-300 transform hover:scale-105">
            <LuHelpingHand size={100} style={{ color: "#06D666" }} />
            <p className="font-bold text-xl">Partnerships</p>
            <p
              onClick={() => navigate("/about")}
              className="cursor-pointer text-accent font-light border-b-2 border-accent transition duration-300 hover:text-primary hover:border-primary"
            >
              Learn More
            </p>
          </div>

          {/* Quality Education */}
          <div className="card bg-white py-12 px-4 gap-6 rounded-md flex flex-col items-center shadow-md transition-transform duration-300 transform hover:scale-105">
            <FaUserGraduate size={100} style={{ color: "#06D666" }} />
            <p className="font-bold text-xl">Quality Education</p>
            <p
              onClick={() => navigate("/about")}
              className="cursor-pointer text-accent font-light border-b-2 border-accent transition duration-300 hover:text-primary hover:border-primary"
            >
              Learn More
            </p>
          </div>

          {/* Business */}
          <div className="card bg-white py-12 px-4 gap-6 rounded-md flex flex-col items-center shadow-md transition-transform duration-300 transform hover:scale-105">
            <FaBusinessTime size={100} style={{ color: "#06D666" }} />
            <p className="font-bold text-xl">Business</p>
            <p
              onClick={() => navigate("/about")}
              className="cursor-pointer text-accent font-light border-b-2 border-accent transition duration-300 hover:text-primary hover:border-primary"
            >
              Learn More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
