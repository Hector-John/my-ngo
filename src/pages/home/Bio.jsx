import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import Title from "../../constants/Title";

const Bio = () => {
  const navigate = useNavigate();

  return (
    <section className="h-full bg-bgColor pt-12 pb-20" id="about">
      <Title title="What We Do" />

      <div className="padded">
        <div className="h-full grid grid-cols-1 mb-20 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center md:mb-0">
            <h1 className="text-textColor font-semibold text-2xl mt-4 capitalize mb-6 lg:text-3xl lg:mt-0">
              Empowering Communities Through Sustainable Initiatives
            </h1>
            <p className="subtitle text-mutedForeground mb-6">
              We focus on providing essential resources and support to those in
              need, ensuring that every individual has access to education,
              healthcare, and opportunities for growth. Join us in making a
              difference!
            </p>
            <button
              className="btn2 py-3 rounded w-1/3"
              onClick={() => navigate("/about")}
            >
              Read More
            </button>
          </div>

          <div className="images relative h-full flex lg:justify-center">
            <img
              src={images.gallery1}
              alt="Gallery Image"
              className="w-[400px] h-[400px] transform transition-transform duration-300 hover:scale-105 border-slate-300 border-[5px]"
            />
          </div>
        </div>

        <div className="h-full mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="images relative h-full hidden lg:flex justify-center">
            <img
              src={images.gallery1}
              alt="Gallery Image"
              className="w-[400px] h-[400px] transform transition-transform duration-300 hover:scale-105 border-slate-300 border-[5px]"
            />
          </div>

          <div className="flex flex-col justify-center md:mb-0">
            <h1 className="text-textColor font-semibold text-2xl capitalize mb-3 lg:text-3xl lg:mb-4">
              Volunteer With Us and Make a Difference
            </h1>
            <p className="subtitle text-mutedForeground mb-6">
              Our volunteer programs allow individuals to get involved in
              meaningful ways, helping those in need and creating lasting impact
              within communities. Discover how you can lend a hand and change
              lives!
            </p>
            <button
              className="btn3 py-3 rounded w-1/3"
              onClick={() => navigate("/volunteer")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
