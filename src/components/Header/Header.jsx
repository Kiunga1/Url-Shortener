import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 p-6 md:p-12 flex justify-between items-center relative">
      <div className="flex items-center">
        <img src="src/assets/images/logo.svg" alt="Company Logo" className="h-15 w-25 mr-2" />
        
        {/* Navigation Links for Medium/Large screens */}
        <nav className="hidden md:flex items-center list-none">
          <li className="ml-4">Features</li>
          <li className="ml-4">Pricing</li>
          <li className="ml-4">Resources</li>
        </nav>
      </div>

      {/* Menu Icon for Mobile Devices */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="text-gray-800 text-xl" />
      </div>

      {/* Buttons for Medium/Large screens */}
      <div className="hidden md:flex items-center">
        <Button label="LogIn" to="/loginPage"  className="text-gray-800 ml-4" />
        <Button label="SignUp" to='/signupPage' className="bg-cyan text-white ml-4 py-2 px-4 rounded-3xl" />
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute font-bold w-5/6 top-full bg-darkViolet p-8 rounded z-10">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faTimes} className="text-gray-800 cursor-pointer" onClick={closeMenu} />
          </div>

          {/* Navigation Links for Mobile Devices */}
          <nav className="mb-4 text-white ">
            <li className="block py-2">Features</li>
            <li className="block py-2">Pricing</li>
            <li className="block py-2">Resources</li>
          </nav>

          <div className="h-px bg-gray-300 mb-4"></div>

          <div className="flex flex-col gap-3">
            
            <Button label="LogIn" to="/loginPage"  className="text-gray-800 ml-4" />
            <Button label="SignUp" to='/signupPage' className="bg-cyan text-white ml-4 py-2 px-4 rounded-3xl w-20" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
