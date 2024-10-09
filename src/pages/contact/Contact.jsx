import React from "react";
import Form from "./Form";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="">
      <header className="relative bg-fixed bg-accent bg-center bg-cover pb-12 lg:h-[65vh] animate-fadeIn">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-[66] flex flex-col items-center text-center justify-center">
          <h1 className="text-white text-4xl mt-[7rem] mb-2 glow-text font-bold">
            Get In Touch With Us
          </h1>
          <p className="lg:w-[45%] w-[70%] playfair text-xl leading-8 text-white mt-2">
            That's what I consider true generosity: You give your all, and yet
            you always feel as if it costs you nothing.
          </p>
          <div className="flex mt-8 items-center gap-1 py-3 px-6 bg-[#ffffff26] text-white rounded-md shadow border hover:bg-primary hover:border-primary transition duration-200">
            <h6 className="flex gap-1 items-center">
              Home <p> {">"} </p>
            </h6>
            <span>Contact</span>
          </div>
        </div>
      </header>

      <div className="padded mt-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>Doing nothing for others is the undoing of ourselves.</p>

            <div className="space-y-3">
              <div className="flex gap-4 items-center">
                <FaMapMarkerAlt />
                <p>Nairobi, Kenya</p>
              </div>
              <div className="flex gap-4 items-center">
                <IoSend />
                <p>
                  <a
                    href="mailto:hakheem67@gmail.com"
                    className=" hover:underline"
                  >
                    hakheem67@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <FaPhoneAlt />
                <p>
                  <a href="tel:+254769403162" className=" hover:underline">
                    +254 769 403162
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Form />
          </div>
        </div>
      </div>

      <div className="map mt-12 lg:mt-16">
        <iframe
          title="Nairobi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.987764799951!2d36.82194695101709!3d-1.292065499918115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfdef1ad3c6cfde!2sNairobi!5e0!3m2!1sen!2ske!4v1696792962067!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
