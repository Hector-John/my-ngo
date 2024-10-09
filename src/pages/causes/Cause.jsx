import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import Pagination from "../../components/Pagination";
import VolunteerCta from "../../components/VolunteerCta";

const causesData = [
  {
    title: "African Kindergarten",
    date: "Thursday, July 9, 2020",
    donations: "$5,000 / $12,000",
    percentage: 60,
    image: images.volunteers,
  },
  {
    title: "Clean Water For All",
    date: "Thursday, July 9, 2020",
    donations: "$7,000 / $10,000",
    percentage: 50,
    image: images.volunteers,
  },
  {
    title: "Our Charity Budget",
    date: "Thursday, July 9, 2020",
    donations: "$5,000 / $9,000",
    percentage: 70,
    image: images.volunteers,
  },
  {
    title: "New School Teachers",
    date: "Thursday, July 9, 2020",
    donations: "$8,000 / $15,000",
    percentage: 80,
    image: images.volunteers,
  },
  {
    title: "Medical Supplies for Rural Areas",
    date: "Thursday, July 9, 2020",
    donations: "$4,000 / $10,000",
    percentage: 40,
    image: images.volunteers,
  },
  {
    title: "School Books Donation",
    date: "Thursday, July 9, 2020",
    donations: "$3,000 / $7,500",
    percentage: 60,
    image: images.volunteers,
  },
];

const Cause = () => {
  return (
    <section className="">
      <header
        className="relative bg-fixed bg-center bg-cover h-full pb-8 lg:h-[65vh] animate-fadeIn"
        style={{
          backgroundImage: `url(${images.causesBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-[66] flex flex-col items-center justify-center ">
          <h1 className="text-white text-4xl mt-[7rem] mb-2 glow-text font-bold ">
            Our Causes
          </h1>
          <p className="lg:w-[45%] w-[70%] playfair text-xl leading-8 text-center text-white mt-2 ">
            There is not a man of us who does not at times need a helping hand
            to be stretched out to him, and then shame upon him who will not
            stretch out the helping hand to his brother.
          </p>
          <div className="flex mt-8 items-center gap-1 py-3 px-6 bg-[#ffffff26] text-white rounded-md shadow border hover:bg-primary hover:border-primary transition duration-200">
            <h6 className="flex gap-1 items-center">
              Home<p> {">"} </p>
            </h6>
            <span>Causes</span>
          </div>
        </div>
      </header>

      <div className="padded bg-gray-100 flex flex-col items-center justify-center ">
        <div className="lg:pt-[8rem] pt-[4rem] pb-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
          {causesData.map((cause, index) => (
            <div
              key={index}
              className="flex p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={cause.image}
                alt={cause.title}
                className="lg:w-[12rem] lg:block hidden p-4 object-cover rounded-lg"
              />

              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{cause.title}</h3>
                  <p className="text-green-500 text-sm mt-1">{cause.date}</p>
                </div>
                <hr className="h-[2px] bg-gray-300 my-4 " />
                <div className="">
                  <p className="text-gray-700">
                    <strong>Donations:</strong> {cause.donations}
                  </p>
                  <div className="bg-green-500 text-white font-bold py-1 px-3 rounded-md inline-block mt-2">
                    {cause.percentage}%
                  </div>
                </div>
                <Link
                  to={`/causes-single`}
                  className="text-accent mt-4 text-sm underline flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <Pagination />
        </div>
      </div>

      <div className="py-20 flex flex-col items-center justify-center text-center ">
        <h1 className="uppercase mb-3 text-primary playfair font-semibold ">
          All around the world
        </h1>
        <p className="text-mutedForeground subtitle w-[90%] lg:w-1/2 ">
          Don’t take too much advice. Most people who have a lot of advice to
          give — with a few exceptions — generalize whatever they did. Don’t
          over-analyze everything. I myself have been guilty of over-thinking
          problems. Just build things and find out if they work.
        </p>
        <div className="flex items-center justify-center gap-6 mt-10">
          <button className="py-3 px-6 bg-green-50 text-primary rounded-md shadow border-[.03rem] border-primary hover:bg-primary hover:border-primary hover:text-white transition duration-300">
            Purchase Site
          </button>
          <button className="py-3 px-6 bg-red-50 text-accent rounded-md shadow border-[.03rem] border-accent hover:bg-accent hover:border-accent hover:text-white transition duration-300">
            Read More
          </button>
        </div>
      </div>

      <VolunteerCta />
    </section>
  );
};

export default Cause;
