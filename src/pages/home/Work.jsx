import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../constants/Title";
import images from "../../constants/images";

const Work = () => {
  const navigate = useNavigate();

  return (
    <section className="h-full lg:h-screen pt-8 pb-20 bg-gray-100">
      <Title title="Our Projects" />
      <div className="padded items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        <div className=" bg-white h-full shadow-lg rounded-md flex flex-col items-center group">
          <div className="w-full h-60 rounded-t-md overflow-hidden">
            <img
              src={images.gallery1}
              alt="Gallery Image 1"
              className="w-full h-full object-cover filter grayscale group-hover:filter-none transition duration-300"
            />
          </div>

          {/* Text Content */}
          <div className=" text-center mt-2 px-4 ">
            <p className=" text-lg font-semibold">
              Safe and clean water for all
            </p>
            <p className="relative font-light mt-2 mb-6 text-sm text-gray-400">
              Our Target: <span className="text-accent font-bold">$10,000</span>
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-lg rounded-md flex flex-col items-center group">
          <div className="w-full h-60 rounded-t-md overflow-hidden">
            <img
              src={images.gallery2}
              alt="Gallery Image 2"
              className="w-full h-full object-cover filter grayscale group-hover:filter-none transition duration-300"
            />
          </div>

          {/* Text Content */}
          <div className=" text-center mt-2 px-4 ">
            <p className="text-lg font-semibold">
              Equal education for every child
            </p>
            <p className="relative font-light mt-2 mb-6 text-sm text-gray-400">
              Our Target: <span className="text-accent font-bold">$10,000</span>
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-lg rounded-md flex flex-col items-center group">
          <div className="w-full h-60 rounded-t-md overflow-hidden">
            <img
              src={images.gallery3}
              alt="Gallery Image 1"
              className="w-full h-full object-cover filter grayscale group-hover:filter-none transition duration-300"
            />
          </div>

          {/* Text Content */}
          <div className=" text-center mt-2 px-4 ">
            <p className="text-lg font-semibold">
              Championing for better living conditions
            </p>
            <p className="relative font-light mt-2 mb-6 text-sm text-gray-400">
              Our Target: <span className="text-accent font-bold">$10,000</span>
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-lg rounded-md flex flex-col items-center group">
          <div className="w-full h-60 rounded-t-md overflow-hidden">
            <img
              src={images.gallery4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover filter grayscale group-hover:filter-none transition duration-300"
            />
          </div>

          {/* Text Content */}
          <div className=" text-center mt-2 px-4 ">
            <p className="text-lg font-semibold">
              Striving for better healthcare
            </p>
            <p className="relative font-light mt-2 mb-6 text-sm text-gray-400">
              Our Target: <span className="text-accent font-bold">$10,000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
