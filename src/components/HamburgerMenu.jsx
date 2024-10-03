import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import images from '../constants/images'; 
import { HiMenuAlt2 } from "react-icons/hi";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    navigate(link === 'Home' ? '/' : link.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 text-white bg-transparent"
      >
        <HiMenuAlt2 size={24} />
      </button>

      <Dialog open={isOpen} onClose={toggleMenu} className="fixed inset-0 z-50">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div className="fixed top-0 right-0 w-3/4 h-full bg-bgColor shadow-lg p-5">
          <div className="flex justify-between items-center">
            <img src={images.logoh} alt="LOGO" className="w-[80px] h-[60px]" />
            <button onClick={toggleMenu} className="text-white">
              <AiOutlineClose size={24} />
            </button>
          </div>

          <ul className="flex flex-col mt-8 space-y-4">
            {['Home', 'Causes', 'About', 'Blog', 'Contact'].map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link === 'Home' ? '/' : link.toLowerCase()}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded transition duration-300 ${
                      isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary hover:text-white'
                    }`
                  }
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="mt-8 px-6 py-3 rounded text-white bg-primary"
            onClick={() => document.getElementById("volunteer").scrollIntoView({ behavior: 'smooth' })}
          >
            Volunteer Now
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default HamburgerMenu;
