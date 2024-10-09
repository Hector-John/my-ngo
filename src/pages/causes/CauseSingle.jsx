import images from "../../constants/images";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TiTick } from "react-icons/ti";
import { MdReply } from "react-icons/md";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa6";
import Newsletter from "../../components/Newsletter";
import { IoMdSend } from "react-icons/io";

const CauseSingle = () => {
  const raised = 6550;
  const goal = 8000;
  const percentage = (raised / goal) * 100;

  return (
    <div>
      <header
        className="relative bg-fixed bg-center bg-cover h-[35vh] lg:h-[65vh] animate-fadeIn"
        style={{
          backgroundImage: `url(${images.causesBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-[87] flex flex-col justify-center items-center h-full animate-fadeIn delay-150 text-center">
          <h1 className="text-white font-bold text-4xl mt-16">Causes Single</h1>
          <div className="flex items-center mt-4 justify-center gap-1 py-3 px-6 bg-[#ffffff26] text-white rounded-md shadow border">
            <h6 className="flex gap-1 items-center justify-center">
              Causes<p> {">"} </p>
            </h6>
            <span className="text-primary">Single</span>
          </div>
        </div>
      </header>

      <section className="padded">
        {/* top deck */}
        <div className="flex flex-col lg:flex-row gap-8 p-6">
          <div className="flex-1">
            <img
              src={images.banner}
              alt="Cause Image"
              className="rounded-lg lg:h-[80%]"
            />

            <div className="mt-4">
              <div className="lg:w-[95%] mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div
                  className="bg-green-500 h-2.5 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>
              </div>

              <div className="flex justify-between text-sm mt-2 text-gray-600 lg:w-[95%]">
                <p>
                  <strong>RAISED:</strong> $
                  <CountUp start={0} end={raised} duration={1.5} />
                </p>
                <p>
                  <strong>GOAL:</strong> ${goal}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-0"
                />

                <button className="absolute right-3 top-2 text-gray-400 hover:text-primary">
                  <IoIosSearch size="24" />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="relative pb-2 mb-4">
                <span className="absolute left-0 border-b border-primary w-1/6 bottom-0"></span>
                <span className="text-lg font-semibold">Categories</span>
              </h2>

              <ul className="space-y-2 text-gray-600  ">
                {[
                  "Accommodation",
                  "Children Protection",
                  "Donation Event",
                  "Food Supply",
                  "Health Care",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{category}</span>
                    <span>({Math.floor(Math.random() * 20) + 1})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* second deck */}
        <div className="grid lg:grid-cols-3  ">
          <div className="col-span-2 gap-4 lg:w-[97%]">
            {/* cause leader */}
            <div className="flex gap-4 items-center lg:justify-center py-4">
              <img
                src={images.avatar2}
                alt="Cause Leader Image"
                className="object-cover rounded-full w-24 h-24 lg:w-[120px] lg:h-[120px] "
              />
              <div className="">
                <h3 className="text-2xl font-semibold  ">Hector John</h3>
                <p className="text-accent font-semibold text-lg ">
                  Cause Leader
                </p>
                <p className="text-mutedForeground mt-1 hidden lg:flex">
                  There is not a man of us who does not at times need a helping
                  hand to be stretched out to him, and then shame upon him who
                  will not stretch out the helping hand to his brother.
                </p>
              </div>
            </div>

            {/* cause texts */}
            <div className="texts">
              <div className="flex items-center justify-between mb-6 mt-4 ">
                <h1 className="uppercase text- font-semibold w-2/3 lg:">
                  help Us to Send Vegetable to poor children
                </h1>
                <button className="btn1 py-2 px-4 rounded-full ">
                  Donate Now
                </button>
              </div>
              <p className="text-mutedForeground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                deleniti non rem. Sit placeat, quia alias commodi iusto totam
                voluptas molestias, fuga voluptatem aperiam aliquid officia vel
                dicta sint a.
              </p>
              <br />
              <p className="text-mutedForeground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio nulla fuga, ducimus, delectus quod officia optio
                repellendus laudantium quasi facilis odit maiores ut aliquid
                sed, ratione rerum qui quas molestias.
              </p>
              <br />
              <p className="text-mutedForeground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                tempora repudiandae blanditiis quas labore. Ipsum similique nisi
                vitae. Laboriosam beatae porro exercitationem doloremque neque
                asperiores ut non perspiciatis. Nisi, optio.
              </p>

              <h2 className="relative pb-2 mb-4 mt-6">
                <span className="absolute left-0 border-b border-primary w-1/6 bottom-0"></span>
                <span className="text-lg font-semibold">
                  Enlighten a life with a donation
                </span>
              </h2>
              <div className="grid grid-cols-2 py-4">
                <div className="flex gap-2">
                  <TiTick size={20} className="text-primary" />
                  <p className="text-mutedForeground">
                    Pellentesque lacus urna, feugiat non co
                  </p>
                </div>
                <div className="flex gap-2">
                  <TiTick size={20} className="text-primary" />
                  <p className="text-mutedForeground">
                    Pellentesque lacus urna, feugiat non co
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <TiTick size={20} className="text-primary" />
                  <p className="text-mutedForeground">
                    Pellentesque lacus urna, feugiat non co
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <TiTick size={20} className="text-primary" />
                  <p className="text-mutedForeground">
                    Pellentesque lacus urna, feugiat non co
                  </p>
                </div>
              </div>

              <p className="text-mutedForeground subtitle italic py-6 ">
                ivamus mollis, elit vitae maximus imperdiet, nisi nulla
                fermentum nisi, sed luctus metus dolor ac eros. Nulla cursus
                cidunt just ultrices tellus elementum, et molestie nulla
                pharetra.
              </p>

              <div className="flex justify-end items-center gap-2 pt-2">
                <p>Share:</p>
                <div className="flex gap-2 text-textColor">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter
                      size="20"
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size="20"
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPinterest
                      size="20"
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube
                      size="20"
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size="20"
                      className="transition-all duration-300 hover:text-primary"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* comments */}
            <div>
              <h1 className="border-gray-300 border-b  pb-2">Comments</h1>
              <div className="flex items-center gap-4 mt-6 border-gray-300 border-b pb-3">
                <img
                  src={images.avatar1}
                  alt="user image"
                  className="w-24 h-24 rounded-full object-cover  "
                />

                <div className="">
                  <div className="flex items justify-between ">
                    <h2>John Barret</h2>
                    <div className="flex gap-4 justify-between items-center ">
                      <p className="text-textColor ">November 16, 2024</p>
                      <p className="flex gap-2 items-center text-mutedForeground">
                        <MdReply size={20} className="text-primary " />
                        <span className="font-light text-sm hover:text-primary duration-300 ease-in cursor-pointer ">
                          Reply
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-mutedForeground mt-2">
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Aenean lacinia bibendum . Crastis consectetur sit amet
                    fermentum. Sed lorem ips consectetur estorumes ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:pl-16 mt-6 border-gray-300 border-b pb-3  ">
                <img
                  src={images.avatar1}
                  alt="user image"
                  className="w-24 h-24 rounded-full object-cover  "
                />

                <div className="">
                  <div className="flex items justify-between ">
                    <h2>John Barret</h2>
                    <div className="flex gap-4 justify-between items-center ">
                      <p className="text-textColor ">November 16, 2024</p>
                      <p className="flex gap-2 items-center text-mutedForeground">
                        <MdReply size={20} className="text-primary " />
                        <span className="font-light text-sm hover:text-primary duration-300 ease-in cursor-pointer ">
                          Reply
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-mutedForeground mt-2">
                    Pellentesque ornnia bibendum . Crastis consectetur sit amet
                    fermentum. Sed lorem ips consectetur estorumes ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h1>ADD COMMENTS</h1>
              <form className="flex flex-col space-y-4 pb-16">
                <div className="flex flex-col lg:gap-0 md:flex-row gap-4 md:space-x-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="p-2 border border-gray-300 rounded focus:outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Write your message here"
                  className="p-2 border border-gray-300 rounded focus:outline-none resize-none"
                  rows="4"
                ></textarea>

                <input
                  type="button"
                  value="Submit"
                  className="btn2 py-2 px-6 rounded w-1/4 "
                />
              </form>
            </div>
          </div>

          <div className="col-span-1">
            {/* Recent Post */}
            <div>
              <h2 className="relative pb-2 mb-4">
                <span className="absolute left-0 border-b border-primary w-1/6 bottom-0"></span>
                <span className="text-lg font-semibold  ">Recent Posts</span>
              </h2>

              <ul className="space-y-6 text-gray-600">
                <li className=" flex gap-4 border-b border-gray-300 pb-3 ">
                  <img
                    src={images.banner}
                    alt="post 1 image"
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="hover:text-primary cursor-pointer text-md  ">
                      {" "}
                      How to Make a Difference
                    </p>
                    <p className="italic text-mutedForeground text-sm">
                      Jan 19, 2024
                    </p>
                  </div>
                </li>
                <li className=" flex gap-4 border-b border-gray-300 pb-3 ">
                  <img
                    src={images.causesBg}
                    alt="post 1 image"
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="hover:text-primary cursor-pointer text-md  ">
                      {" "}
                      Charity cooking event for everyone...
                    </p>
                    <p className="italic text-mutedForeground text-sm">
                      Jan 19, 2024
                    </p>
                  </div>
                </li>
                <li className=" flex gap-4 border-b border-gray-300 pb-3 ">
                  <img
                    src={images.cleanWater}
                    alt="post 1 image"
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="hover:text-primary cursor-pointer text-md  ">
                      {" "}
                      Clean water for all
                    </p>
                    <p className="italic text-mutedForeground text-sm">
                      Jan 19, 2024
                    </p>
                  </div>
                </li>
              </ul>

              <div className="relative mt-6 mb-10 group">
                <h2 className="relative pb-2 mb-4">
                  <span className="absolute left-0 border-b border-primary w-1/6 bottom-0"></span>
                  <span className="text-lg font-semibold">Urgent Causes</span>
                </h2>

                <div className="relative">
                  <div className="bg-black opacity-30 absolute inset-0 flex flex-col justify-center items-center p-4 transition-all duration-300 ease-in-out group-hover:opacity-70 group-hover:z-30 z-0">
                    <h1 className="text-white">Donate For Education</h1>
                    <p className="text-white font-semibold">
                      <span className="text-primary">67</span> Days Left
                    </p>
                  </div>

                  <img
                    src={images.slider3}
                    alt="urgent cause image"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* newsletter */}
              <div className="hidden lg:block">
                <h2 className="relative pb-2 mb-4">
                  <span className="absolute left-0 border-b border-primary w-1/6 bottom-0"></span>
                  <span className="text-lg font-semibold">Newsletter</span>
                </h2>
                <div className="flex max-w-xs">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email..."
                    className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
                  />
                  <button className="bg-primary text-white rounded-r p-2 w-16 flex items-center justify-center transition-transform duration-300 hover:bg-accent ">
                    <IoMdSend size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default CauseSingle;
