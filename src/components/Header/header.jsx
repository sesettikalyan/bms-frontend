import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // To detect outside clicks

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside the mobile menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white text-black shadow-md">
      <nav className="flex justify-between items-center px-4 py-4">
        {/* Logo or Title */}
        <Link to="/home" className="text-xl ml-[5%] text-orange-500 font-bold">
          Blog Management System
        </Link>

        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-6">
          <Link
            to="/home"
            className="px-4 py-2 text-base hover:text-blue-500 transition-colors duration-300">
            HOME
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 text-base hover:text-blue-500 transition-colors duration-300">
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 text-base hover:text-blue-500 transition-colors duration-300">
            CONTACT
          </Link>
          <Link
            to="/"
            className="px-5 py-2 text-base hover:text-red-500 transition-colors duration-300">
            LOGOUT
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}>
          <nav className="flex flex-col p-6 gap-4">
            {/* Close Button */}
            <button
              className="self-end text-2xl text-gray-700"
              onClick={toggleMenu}>
              <AiOutlineClose />
            </button>
            <Link
              to="/home"
              className="text-lg hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}>
              HOME
            </Link>
            <Link
              to="/about"
              className="text-lg hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}>
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="text-lg hover:text-blue-500 transition-colors duration-300"
              onClick={toggleMenu}>
              CONTACT
            </Link>
            <Link
              to="/"
              className="text-lg hover:text-red-500 transition-colors duration-300"
              onClick={toggleMenu}>
              LOGOUT
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
}
