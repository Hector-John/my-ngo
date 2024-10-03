import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import images from '../constants/images';
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [activePage, setActivePage] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`py-2 fixed z-[99] w-full top-0 left-0 transition-all duration-300 ${scrolled ? "bg-bgColor shadow-md" : "bg-transparent"}`}>
      <div className="padded flex justify-between items-center w-full">
        <div className="logo">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-white"
            }
            onClick={() => handleClick("/")}>
            <img src={images.logoh} alt="LOGO" className="w-[80px] h-[60px] " />
          </NavLink>
        </div>

        <ul className="flex items-center justify-between ">
          {["Home", "Causes", "About", "Blog", "Contact"].map((link, index) => (
            <li key={index}>
              <NavLink
                to={link === "Home" ? "/" : link.toLowerCase()}
                className={({ isActive }) =>
                  `transition duration-300 top-0 py-[29.5px] px-4  ${
                    isActive 
                      ? (scrolled ? "bg-primary text-white" : "bg-transparent text-primary") 
                      : (scrolled ? "text-textColor" : "text-gray-300 hover:bg-primary hover:text-white")
                  }`
                }
                onClick={() => handleClick(link.toLowerCase())}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="btn3 px-6 py-3 rounded"
          onClick={() => document.getElementById("volunteer").scrollIntoView({ behavior: 'smooth' })}>
          Volunteer Now
        </button>
        {/* <HamburgerMenu/> */}
      </div>
    </nav>
  );
};

export default Navbar;
