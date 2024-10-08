import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import Newsletter from "../../components/Newsletter";
import DonateCta from "../../components/DonateCta";

const BlogSingle = () => {
  return (
    <div>
      <header
        className="relative bg-fixed bg-center bg-cover h-[50vh] lg:h-[70vh]"
        style={{
          backgroundImage: `url(${images.ctaBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-[87] flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-white font-bold text-4xl mt-16">Blog Title</h1>
          <span className="text-gray-300 font-light text-sm">
            TUESDAY, JUNE 30, 2020
          </span>
        </div>
      </header>

      <section className="padded mt-12 mb-12">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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
              preparing them for future challenges. This blog explores various
              methods that promote active learning and critical thinking.
            </p>
            <p className="text-gray-700 font-light mb-4">
              One effective strategy is the use of project-based learning, where
              students work on real-world problems. This approach encourages
              collaboration, creativity, and problem-solving skills.
            </p>
            <p className="text-gray-700 font-light mb-4">
              Another important aspect is integrating technology into the
              classroom. Digital tools can enhance learning experiences and
              provide students with diverse resources at their fingertips.
            </p>
            <p className="text-gray-700 font-light mb-4">
              As educators, it is our responsibility to adapt and innovate,
              ensuring that our students are equipped with the skills they need
              for the future.
            </p>
            <Link
              to="/blog"
              className="text-accent font-semibold hover:underline"
            >
              Back to Blogs
            </Link>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Comments</h3>
          <div className="border-t pt-4">
            {/* Example Comment */}
            <div className="mb-4">
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-700">
                Great insights! I love the focus on innovative strategies.
              </p>
              <span className="text-gray-500 text-sm">June 30, 2020</span>
            </div>

            {/* Example Comment */}
            <div className="mb-4">
              <p className="font-semibold">John Smith</p>
              <p className="text-gray-700">
                Very informative article. Thanks for sharing!
              </p>
              <span className="text-gray-500 text-sm">July 1, 2020</span>
            </div>

            {/* Comment Input */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Leave a Comment</h4>
              <textarea
                className="w-full border rounded-lg p-2 mb-2"
                rows="4"
                placeholder="Write your comment here..."
              ></textarea>
              <button className="bg-accent text-white rounded-lg py-2 px-4 hover:bg-accent-dark">
                Submit
              </button>
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
