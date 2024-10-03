import { Link } from "react-router-dom";
import images from "../../constants/images";
import {
  FaHandsHoldingCircle,
  FaBusinessTime,
  FaPeopleGroup,
} from "react-icons/fa6";

const Cta = () => {
  const stats = [
    {
      icon: FaHandsHoldingCircle,
      number: "999",
      label: "Causes Solved",
    },
    {
      icon: FaPeopleGroup,
      number: "1200",
      label: "Volunteers",
    },
    {
      icon: FaBusinessTime,
      number: "1200",
      label: "Completed Projects",
    },
  ];

  return (
    <section
      className="relative py-16 bg-fixed bg-cover bg-center lg:h-[60vh] h-full bg-gradient-to-b"
      style={{
        backgroundImage: `url(${images.slider3})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 padded flex flex-col items-center justify-between h-full lg:flex-row ">
        {/* Text Section */}
        <div className="flex flex-col w-full text-center lg:w-[40%] lg:text-start mb-12 lg:mb-0">
          <h1 className="text-white text-3xl font-semibold mb-6 leading-10">
            Your support helps us empower communities and create lasting change.
          </h1>
          <Link to="/volunteer">
            <button className="btn2 py-3 px-8 rounded">Join Us</button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between items-center m-auto w-full lg:w-[53%] gap-6 lg:gap-12">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center gap-3 transition-transform transform hover:scale-105"
              >
                <IconComponent
                  size={100}
                  className="text-white group-hover:text-[#06D666] border-2 border-white rounded-full p-4 transition-colors"
                />
                <p className="text-white text-4xl font-bold">{stat.number}</p>
                <h2 className="text-white text-sm font-thin uppercase">
                  {stat.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cta;
