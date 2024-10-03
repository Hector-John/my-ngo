import React from 'react';
import { Link } from "react-router-dom";
import images from '../constants/images'; 
import { FaXTwitter, FaInstagram, FaYoutube, FaPinterest, FaFacebook } from "react-icons/fa6";

const Footer = () => { 
  return (
    <div className='bg-secondary'>
      <footer className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="flex lg:flex-col gap-4">
          <img src={images.footer} alt="footer logo" className="w-1/2 lg:w-full"/>
          <p className='subtitle text-bgColor'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam assumenda repellendus soluta voluptates sit. Neque maiores tempore enim, cumque nostrum repudiandae distinctio praesentium, autem nesciunt ea corporis minima incidunt sapiente.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-start lg:items-center">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className='flex flex-col gap-2 text-bgColor font-extralight '>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/">
              <p>Causes</p>
            </Link>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <Link to="/blog">
              <p>Blogs</p>
            </Link>
            <Link to="#gallery">
              <p>Gallery</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start lg:items-center">
          <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
          <div className='flex flex-col gap-2 text-bgColor font-extralight '>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
            <Link to="#gallery">
              <p>Our Services</p>
            </Link>
          </div>
        </div>

        {/* Address */}
        <div className='flex flex-col gap-4 items-start lg:items-center'>
          <h1 className="text-lg font-semibold text-white">Address</h1>
          <p className="text-bgColor">
            254 Straight Outta Compton <br />
            Nairobi 00100
          </p>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col items-start lg:items-center gap-4'>
          <h1 className='playfair text-lg'>Newsletter</h1>
          <div className='flex'>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Enter Your Email' 
              className='p-2 h-[3rem] border-none focus:ring-0 focus:outline-none' 
            />
            <button className='btn2'>Subscribe</button>
          </div>
          <p className="text-bgColor text-sm">Your email is safe with us, we don't spam.</p>

          <div className="socials">
            <h1 className="playfair text-2xl text-bgColor mb-3 ">Follow Us</h1>
            <div className="flex gap-4 text-bgColor">
              <FaXTwitter size='20' />
              <FaInstagram size='20' />
              <FaPinterest size='20' />
              <FaYoutube size='20' />
              <FaFacebook size='20' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
