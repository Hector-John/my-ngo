import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="flex flex-row lg:flex-col gap-4  ">
          <img
            src={images.footer}
            alt="footer logo"
            className="w-1/2 lg:w-full"
          />
          <p className="subtitle text-bgColor">
            Join us in our mission to create positive change in the community.
            Together, we can make a difference.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-start lg:items-center">
          <h3 className="text-lg font-semibold playfair text-white">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-bgColor font-extralight">
            <Link
              to="/"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>Home</p>
            </Link>

            <Link
              to="/causes"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>Causes</p>
            </Link>
            <Link
              to="/about"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>About Us</p>
            </Link>
            <Link
              to="/blog"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>Blogs</p>
            </Link>
            <Link
              to="#gallery"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>Gallery</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold playfair text-white">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-2 text-bgColor font-extralight">
            <Link
              to="/contact"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>Contact Us</p>
            </Link>
            <Link
              to="#gallery"
              className="transition-all duration-300 hover:text-primary"
            >
              <p>Our Services</p>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold playfair text-white">
              Address
            </h1>
            <p className="text-bgColor">
              254 Straight Outta Compton <br />
              Nairobi 00100
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-1 lg:col-span-2 lg:ml-8 ">
          <h1 className=" text-lg font-semibold text-white playfair ">
            Newsletter
          </h1>
          <div className="flex">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="p-2 h-[3rem] border-none rounded-l-md focus:ring-0 focus:outline-none w-[70%]"
            />
            <button className="btn2 px-3 rounded-r-md ">Subscribe</button>
          </div>
          <p className="text-bgColor text-sm">
            Your email is safe with us, we don't spam.
          </p>

          <div className="socials">
            <h1 className=" text-lg font-semibold playfair text-bgColor mb-3 ">
              Follow Us
            </h1>
            <div className="flex gap-4 text-bgColor">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  size="24"
                  className="transition-all duration-300 hover:text-primary"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size="24"
                  className="transition-all duration-300 hover:text-primary"
                />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest
                  size="24"
                  className="transition-all duration-300 hover:text-primary"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  size="24"
                  className="transition-all duration-300 hover:text-primary"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size="24"
                  className="transition-all duration-300 hover:text-primary"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
