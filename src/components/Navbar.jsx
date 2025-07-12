import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeLinkStyle = "bg-[#131839] text-[#e1e3ea] rounded-2xl px-3 py-1";

  return (
    <div className="flex items-center pt-10 justify-center w-full">
      <nav
        className="p-4 md:p-6 lg:p-4 flex border bg-white/60 backdrop-blur-sm items-center border-black w-11/12 max-w-5xl rounded-lg justify-between gap-2"
        style={{ borderRadius: "40px" }} 
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 md:h-10 lg:h-6 w-auto" />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#131839] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            <li>
              <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink
                  to={"/works"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Services
              </NavLink>
            </li>
            <li>
              <NavLink
                  to={"/works"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                  to={"/works"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Upcoming
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="bg-[#154bff] text-white px-4 py-2 rounded-3xl hover:bg-[#232e6e] hover:text-[#e1e3ea] transition duration-300 ease-in-out shadow-md">
            Contact Us
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-6 animate-fade-in">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-[#131839] focus:outline-none"
            aria-label="Close navigation"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink
                  to={"/works"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Works
              </NavLink>
            </li>
            <li>
              <NavLink
                  to={"/works"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Works
              </NavLink>
            </li>
            <li>
              <NavLink
                  to={"/works"}
                  className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                  isActive ? activeLinkStyle : ""
                  }`
                  }
                  >
                  Works
              </NavLink>
            </li>
          </ul>
          <button className="mt-8 bg-[#154bff] text-white px-6 py-3 rounded-3xl text-xl hover:bg-[#232e6e] hover:text-[#e1e3ea] transition duration-300 ease-in-out shadow-lg">
            Contact Us
          </button>
        </div>
      )}

      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
};

export default Navbar; 
