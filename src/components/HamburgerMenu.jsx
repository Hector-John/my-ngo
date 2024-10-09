import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <div onClick={toggleMenu} className="cursor-pointer">
        {!isOpen ? <HiMenuAlt3 size={30} /> : <IoClose size={30} />}
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-screen z-50 w-[60%] bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-xl font-semibold opacity-0 ">Menu</h2>
            <IoClose
              className="text-gray-800 cursor-pointer"
              size={30}
              onClick={handleLinkClick}
            />
          </div>

          <ul className="flex flex-col space-y-4">
            {["Home", "Causes", "About", "Blog", "Contact"].map(
              (link, index) => (
                <li key={index} onClick={handleLinkClick}>
                  <NavLink
                    to={link === "Home" ? "/" : link.toLowerCase()}
                    className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors"
                  >
                    {link}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <NavLink
            to="/volunteer"
            onClick={handleLinkClick}
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition duration-200 flex justify-center items-center"
          >
            Volunteer Now
          </NavLink>

          <NavLink
            to="/donate"
            onClick={handleLinkClick}
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition duration-200 flex justify-center items-center"
          >
            Donate
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
