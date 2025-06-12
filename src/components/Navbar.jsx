import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const activeLinkStyle = "bg-[#131839] text-[#e1e3ea] rounded-2xl px-3 py-1";

  return (
    <div className="flex items-center pt-10 justify-center">
      <nav
        className="p-10 flex border h-20 rounded-xl bg-[#b2c4ff] items-center border-black w-4xl rounded-lg justify-between gap-2"
        style={{ borderRadius: "40px" }}
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                    isActive ? activeLinkStyle : ""
                  }`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
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
                to="/page03"
                className={({ isActive }) =>
                  `text-lg text-[#131839] hover:text-[#e1e3ea] transition duration-300 ease-in-out ${
                    isActive ? activeLinkStyle : ""
                  }`
                }
              >
                Page 03
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming"
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
        <div>
          <button className="bg-[#154bff] text-white px-4 py-2 rounded-3xl hover:bg-[#232e6e] hover:text-[#e1e3ea] transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}
