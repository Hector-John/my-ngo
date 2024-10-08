import images from "../constants/images";
import { useNavigate } from "react-router-dom";

const VolunteerCta = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/volunteer");
  };

  return (
    <div
      className="relative bg-fixed bg-center bg-cover h-full lg:h-[50vh]"
      style={{ backgroundImage: `url(${images.testimonybg})` }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-accent opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Centered content */}
      <div className="relative py-12 lg:py-0 z-[70] flex flex-col items-center justify-center text-center h-full w-full">
        <p className="text-white uppercase font-md mb-3">
          Let's start with the first step
        </p>
        <h1 className="lg:w-1/2 text-white text-3xl font-semibold mb-6 leading-[2.5rem]">
          Welcome to Kheem NGO Charity Organization Helping Poor Community.
        </h1>
        <button
          onClick={handleNavigate}
          className="py-3 px-6 bg-green-50 text-primary rounded-md shadow border-[.03rem] border-primary hover:bg-primary hover:border-primary hover:text-white transition duration-300"
        >
          Volunteer Now
        </button>
      </div>
    </div>
  );
};

export default VolunteerCta;
