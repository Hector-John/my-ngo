import images from "../../constants/images";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import Title from "../../constants/Title";
import Sponsors from "../../components/Sponsors";
import DonateCta from "../../components/DonateCta";
import Team from "../../components/Team";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <section>
      <header
        className="relative bg-fixed bg-center bg-cover h-[35vh] lg:h-[65vh] animate-fadeIn"
        style={{
          backgroundImage: `url(${images.slider1})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="padded flex flex-col justify-center items-center h-full lg:items-start animate-fadeIn delay-150">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 z-50 glow-text">
              About Us
            </h1>
            <img
              src={images.separator}
              alt="Title separator"
              className="w-24 lg:w-30"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative padded h-full lg:h-screen mt-10 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="animate-slideInLeft">
            <h2 className="text-4xl font-bold text-textColor mb-4 animate-fadeIn delay-300">
              We are a non-governmental organization
            </h2>
            <p className="text-mutedForeground animate-fadeIn delay-350 mb-4">
              Our mission is to bring sustainable change to communities in need
              by empowering individuals, promoting education, and facilitating
              access to essential services. We work hand-in-hand with local
              leaders to identify key areas of improvement and provide
              long-lasting solutions.
            </p>
            <p className="text-mutedForeground animate-fadeIn delay-400 mb-4">
              Established in 2005, we have grown from a small grassroots
              initiative to an international NGO that operates in over 15
              countries. Our team is composed of volunteers and professionals
              dedicated to addressing critical issues such as poverty,
              healthcare access, and educational inequality. Every year, we
              reach thousands of people through our diverse programs, ranging
              from disaster relief to environmental conservation.
            </p>
            <p className="text-mutedForeground animate-fadeIn delay-450">
              Our core belief is that sustainable change comes from within the
              communities we serve. By investing in local talent, supporting
              small businesses, and advocating for policy changes, we aim to
              create a future where all individuals have the opportunity to
              thrive. Together, we can build a world of equity, compassion, and
              hope.
            </p>
          </div>

          <div className="flex justify-center animate-slideInRight">
            <img
              src={images.volunteer1}
              alt="Volunteers working"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="relative mt-8 lg:mt-auto lg:absolute inset-x-0 bottom-0 lg:h-[50vh] lg:translate-y-1/2">
          <div className="padded h-full flex items-center justify-center lg:w-[70%]">
            <div
              className="relative lg:mt-[10rem] border-2 border-accent w-full h-[50vh] flex items-center justify-center cursor-pointer lg:translate-x-1/3"
              onClick={!showVideo ? handlePlayClick : undefined}
            >
              <div
                className={`absolute inset-0 bg-black opacity-60 ${
                  showVideo ? "hidden" : ""
                }`}
              ></div>
              {!showVideo ? (
                <>
                  <img
                    src={images.banner}
                    alt="Video preview"
                    className="w-full h-full object-cover self-center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full">
                      <FaPlay className="text-red-500 text-4xl" />
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ctmNrKDSuoU?autoplay=1"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-yellow-100 py-16 lg:mt-[4rem]">
        <div className="padded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-[9rem]">
            <div className="p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl text-accent font-semibold playfair mb-2">
                Our Mission
              </h3>
              <p className="font-semibold text-textColor text-2xl lg:mb-4">
                We provide inclusive care for children with special needs.
              </p>
              <p className="subtitle text-mutedForeground mt-4">
                Our mission is to empower children with special needs by
                providing them access to essential resources and support,
                fostering an environment where they can thrive and achieve their
                fullest potential.
              </p>
            </div>
            <div className="p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl text-accent font-semibold playfair mb-2">
                Our Vision
              </h3>
              <p className="font-semibold text-textColor text-2xl lg:mb-4">
                Ensure every child has access to necessary resources.
              </p>
              <p className="subtitle text-mutedForeground mt-4">
                We envision a world where every child, regardless of their
                challenges, has the opportunity to access vital resources and
                receive the support they need to flourish in a nurturing and
                inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognitions */}
      <div className="container mx-auto py-16 px-4 text-center">
        <Title title="Rewards & Recognitions" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 animate-fadeIn delay-300">
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <p className="font-bold text-lg">2021</p>
            <p className="text-secondary italic">Best NGO Award</p>
            <p className="text-mutedForeground">Maroc, Morocco</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏅</div>
            <p className="font-bold text-lg">2022</p>
            <p className="text-secondary italic">Humanitarian Impact Award</p>
            <p className="text-mutedForeground">New York, USA</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏅</div>
            <p className="font-bold text-lg">2023</p>
            <p className="text-gray-600 italic">
              Excellence in Childcare Initiativsecondary{" "}
            </p>
            <p className="text-mutedForeground">London, UK</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <p className="font-bold text-lg">2020</p>
            <p className="text-secondary italic">Global Sustainability Award</p>
            <p className="text-mutedForeground">Tokyo, Japan</p>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="bg-yellow-100 py-10">
        <div className="padded">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 animate-fadeIn">
            <div className="md:w-1/2">
              <p className="text-xl font-semibold text-textColor mb-2">
                Our Journey
              </p>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                From a Small Initiative to Global Impact
              </h3>
              <p className="text-mutedForeground">
                Our organization started as a small group of passionate
                individuals determined to make a difference. With each passing
                year, we have expanded our reach, creating impactful programs
                and forging partnerships with local communities and global
                organizations.
              </p>
              <div className="grid grid-cols-3 mt-[2rem] ">
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl ">299K+</h3>
                  <p className="text-mutedForeground pt-1">Donation Received</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl ">99+</h3>
                  <p className="text-mutedForeground pt-1">Volunteers</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl ">23+</h3>
                  <p className="text-mutedForeground pt-1">Care homes</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={images.handshake}
                alt="Our Journey"
                className="rounded-lg shadow-lg mt-6 lg:mt-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Team />
      <Sponsors />
      <DonateCta />

      {/* Upcoming Events */}
      <div className="py-16 px-[10%] text-center">
        <Title title="Upcoming Events" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-2">Annual Fundraiser Gala</h4>
            <p className="text-gray-600 mb-4">December 1, 2024</p>
            <p className="text-gray-500">
              Join us for an evening of celebration and fundraising as we aim to
              support our ongoing projects. Dinner, entertainment, and a charity
              auction await!
            </p>
            <Link
              to="/blog"
              className="mt-4 inline-flex items-center text-primary hover:text-secondary"
            >
              Learn More <FaArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-2">Community Health Fair</h4>
            <p className="text-gray-600 mb-4">November 15, 2024</p>
            <p className="text-gray-500">
              Free health screenings, workshops, and resources for the
              community. Come and learn about maintaining a healthy lifestyle!
            </p>
            <Link
              to="/blog"
              className="mt-4 inline-flex items-center text-primary hover:text-secondary"
            >
              Learn More <FaArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-2">Volunteer Orientation</h4>
            <p className="text-gray-600 mb-4">October 20, 2024</p>
            <p className="text-gray-500">
              Interested in volunteering? Join us for an orientation session to
              learn more about our programs and how you can get involved.
            </p>
            <Link
              to="/blog"
              className="mt-4 inline-flex items-center text-primary hover:text-secondary"
            >
              Learn More <FaArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
