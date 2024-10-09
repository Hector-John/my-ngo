import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"; // Ensure Link is imported
import images from "../constants/images";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [activePage, setActivePage] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav
      className={`py-2 fixed z-[99] w-full top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-bgColor shadow-md" : "bg-transparent"
      }`}
    >
      <div className="padded flex justify-between items-center w-full">
        <div className="logo">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-white"
            }
            onClick={() => handleClick("/")}
          >
            <img src={images.logoh} alt="LOGO" className="w-[80px] h-[60px]" />
          </NavLink>
        </div>

        <ul className="hidden lg:flex items-center justify-between ">
          {["Home", "Causes", "About", "Blog", "Contact"].map((link, index) => {
            const isCausesActive =
              link === "Causes" &&
              (location.pathname === "/causes" ||
                location.pathname === "/causes-single");
            const isBlogActive =
              link === "Blog" &&
              (location.pathname === "/blog" ||
                location.pathname === "/blog-single");
            return (
              <li key={index}>
                <NavLink
                  to={link === "Home" ? "/" : link.toLowerCase()}
                  className={({ isActive }) =>
                    `transition duration-300 top-0 py-[29.5px] px-4  ${
                      isActive || isCausesActive || isBlogActive
                        ? scrolled
                          ? "bg-primary text-white"
                          : "bg-transparent text-primary"
                        : scrolled
                        ? "text-textColor"
                        : "text-gray-300 hover:bg-primary hover:text-white"
                    }`
                  }
                  onClick={() => handleClick(link.toLowerCase())}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Link to="/volunteer">
          <button className="btn3 px-6 py-3 rounded hidden lg:block">
            Volunteer Now
          </button>
        </Link>

        <div className="block lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
