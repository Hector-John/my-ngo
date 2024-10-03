import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import images from "../constants/images";
import Title from "../constants/Title";

const Team = () => {
  return (
    <div className="h-full lg:h-screen">
      <div className="padded flex flex-col items-center mt-8">
        <Title title="Meet Our Team" />
        <p className="text-center text-textColor max-w-xl mb-4">
          Our dedicated team of professionals brings passion, expertise, and
          experience to our mission of creating meaningful and sustainable
          impact. Meet the people who make it happen every day!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center py-6">
          <div className="flex flex-col pb-5">
            <img
              src={images.avatar2}
              alt="Leonard Jones"
              className="object-cover h-[250px] rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mt-3">Leonard Jones</h3>
              <p className="font-light text-sm italic text-mutedForeground mt-1">
                Co-Founder, CEO
              </p>
              <div className="flex gap-2 justify-center items-center mt-3">
                <a href="#" className="text-gray-800">
                  <FaXTwitter size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-5">
            <img
              src={images.avatar4}
              alt="Maria Roberts"
              className="object-cover h-[250px] rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mt-3">Maria Roberts</h3>
              <p className="font-light text-sm italic text-mutedForeground mt-1">
                Head of Operations
              </p>
              <div className="flex gap-2 justify-center items-center mt-3">
                <a href="#" className="text-gray-800">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-5">
            <img
              src={images.avatar3}
              alt="Sarah Brown"
              className="object-cover h-[250px] rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mt-3">Sarah Brown</h3>
              <p className="font-light text-sm italic text-mutedForeground mt-1">
                Director of Programs
              </p>
              <div className="flex gap-2 justify-center items-center mt-3">
                <a href="#" className="text-gray-800">
                  <FaXTwitter size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-5">
            <img
              src={images.avatar1}
              alt="Michael Lee"
              className="object-cover h-[250px] rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mt-3">Michael Lee</h3>
              <p className="font-light text-sm italic text-mutedForeground mt-1">
                Chief Financial Officer
              </p>
              <div className="flex gap-2 justify-center items-center mt-3">
                <a href="#" className="text-gray-800">
                  <FaXTwitter size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-800">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
