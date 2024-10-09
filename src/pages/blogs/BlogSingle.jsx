import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import Newsletter from "../../components/Newsletter";
import DonateCta from "../../components/DonateCta";
import { MdReply } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const BlogSingle = () => {
  return (
    <div>
      <header
        className="relative bg-fixed bg-center bg-cover h-[35vh] lg:h-[65vh]"
        style={{
          backgroundImage: `url(${images.slider2})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-[87] flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-white font-bold text-4xl mt-16">
            Innovative Learning Strategies
          </h1>
          <span className="text-gray-300 font-light mt-2 text-sm">
            TUESDAY, JUNE 30, 2020
          </span>
        </div>
      </header>

      {/* blog section */}
      <section className="padded my-12 ">
        <div className="grid lg:grid-cols-3  ">
          <div className="col-span-2 gap-4 lg:w-[97%] ">
            <div className="mx-auto p-6 bg-white">
              <img
                src={images.banner}
                alt="Blog Post"
                className="w-full h-[20rem] object-cover rounded-lg mb-6"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Exploring Innovative Learning Strategies
                </h2>
                <p className="text-gray-700 font-light mb-4">
                  In today's fast-paced world, education is evolving. Innovative
                  learning strategies are essential for engaging students and
                  preparing them for future challenges. This blog explores
                  various methods that promote active learning and critical
                  thinking.
                </p>
                <p className="text-gray-700 font-light mb-4">
                  One effective strategy is the use of project-based learning,
                  where students work on real-world problems. This approach
                  encourages collaboration, creativity, and problem-solving
                  skills.
                </p>
                <p className="text-gray-700 font-light mb-4">
                  Another important aspect is integrating technology into the
                  classroom. Digital tools can enhance learning experiences and
                  provide students with diverse resources at their fingertips.
                </p>
                <p className="text-gray-700 font-light mb-4">
                  As educators, it is our responsibility to adapt and innovate,
                  ensuring that our students are equipped with the skills they
                  need for the future.
                </p>
                <Link
                  to="/blog"
                  className="text-accent font-semibold hover:underline"
                >
                  Back to Blogs
                </Link>
              </div>
            </div>
            {/* comment section */}
            <div className="padded my-12">
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
                      Pellentesque ornnia bibendum . Crastis consectetur sit
                      amet fermentum. Sed lorem ips consectetur estorumes ipsum
                      dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
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

              <div className="mt-12">
                <h1>ADD COMMENTS</h1>
                <form className="flex flex-col space-y-4 pb-16">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="flex-1 p-2 mt-2 border border-gray-300 rounded focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none"
                  />

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
                    className="btn2 py-2 px-2 items-center justify-center rounded w-1/4 "
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonateCta />
      <Newsletter />
    </div>
  );
};

export default BlogSingle;
