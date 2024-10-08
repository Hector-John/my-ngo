import images from "../../constants/images";
import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import DonateCta from "../../components/DonateCta";

const Blog = () => {
  return (
    <div>
      <header
        className="relative bg-fixed bg-center bg-cover h-[50vh] lg:h-[70vh] animate-fadeIn"
        style={{
          backgroundImage: `url(${images.causesBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-[87] flex flex-col justify-center items-center h-full animate-fadeIn delay-150 text-center">
          <h1 className="text-white font-bold text-4xl mt-16">Our Blogs</h1>
        </div>
      </header>

      <section className="padded mt-20 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
          {/* Card 1 */}
          <Link to="/blog-single">
            <div className="bg-white h-[34rem] rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={images.volunteer1}
                alt="Card Image"
                className="w-full h-[20rem] object-cover"
              />
              <div className="p-6 text-center">
                <div className="absolute top-2 left-2 ">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    Education
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  Innovative Learning Strategies
                </h2>
                <p className="text-mutedForeground font-light text-sm mb-2">
                  Discover new educational methods that engage and inspire
                  students to reach their full potential.
                </p>
                <span className="font-semibold text-[.7rem] text-accent">
                  TUESDAY, JUNE 30, 2020
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/blog-single">
            <div className="bg-white h-[34rem] rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={images.gallery1}
                alt="Card Image"
                className="w-full h-[20rem] object-cover"
              />
              <div className="p-6 text-center">
                <div className="absolute top-2 left-2 ">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    Community
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  Building Strong Communities
                </h2>
                <p className="text-mutedForeground font-light text-sm mb-2">
                  Explore how community initiatives are changing lives and
                  fostering connections among residents.
                </p>
                <span className="font-semibold text-[.7rem] text-accent">
                  TUESDAY, JUNE 30, 2020
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/blog-single">
            <div className="bg-white h-[34rem] rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={images.cleanWater}
                alt="Card Image"
                className="w-full h-[20rem] object-cover"
              />
              <div className="p-6 text-center">
                <div className="absolute top-2 left-2 ">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    Health
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  Access to Clean Water
                </h2>
                <p className="text-mutedForeground font-light text-sm mb-2">
                  Learn about the global water crisis and the efforts being made
                  to ensure everyone has access to clean water.
                </p>
                <span className="font-semibold text-[.7rem] text-accent">
                  TUESDAY, JUNE 30, 2020
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-6">
          {/* Card 1 */}
          <Link to="/blog-single">
            <div className="bg-white h-[34rem] rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={images.volunteer1}
                alt="Card Image"
                className="w-full h-[20rem] object-cover"
              />
              <div className="p-6 text-center">
                <div className="absolute top-2 left-2 ">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    Education
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  Innovative Learning Strategies
                </h2>
                <p className="text-mutedForeground font-light text-sm mb-2">
                  Discover new educational methods that engage and inspire
                  students to reach their full potential.
                </p>
                <span className="font-semibold text-[.7rem] text-accent">
                  TUESDAY, JUNE 30, 2020
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/blog-single">
            <div className="bg-white h-[34rem] rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={images.gallery1}
                alt="Card Image"
                className="w-full h-[20rem] object-cover"
              />
              <div className="p-6 text-center">
                <div className="absolute top-2 left-2 ">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    Community
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  Building Strong Communities
                </h2>
                <p className="text-mutedForeground font-light text-sm mb-2">
                  Explore how community initiatives are changing lives and
                  fostering connections among residents.
                </p>
                <span className="font-semibold text-[.7rem] text-accent">
                  TUESDAY, JUNE 30, 2020
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/blog-single">
            <div className="bg-white h-[34rem] rounded-lg shadow-lg  overflow-hidden relative">
              <img
                src={images.cleanWater}
                alt="Card Image"
                className="w-full h-[20rem] object-cover"
              />
              <div className="p-6 text-center">
                <div className="absolute top-2 left-2 ">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    Health
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  Access to Clean Water
                </h2>
                <p className="text-mutedForeground font-light text-sm mb-2">
                  Learn about the global water crisis and the efforts being made
                  to ensure everyone has access to clean water.
                </p>
                <span className="font-semibold text-[.7rem] text-accent">
                  TUESDAY, JUNE 30, 2020
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <DonateCta />
      <Newsletter />
    </div>
  );
};

export default Blog;
