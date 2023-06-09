import React, { useState } from "react";
import logo1 from "../assets/logo1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between flex-wrap bg-mainClr p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={logo1} className="w-100 h-10 mr-2" alt="Logo" />BikeChapz
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-5 py-4 rounded text-black-500 hover:text-black-600"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="home"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            HOME
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            CONTACT
          </a>
        </div>
        <div>
          <a
            href="h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary inline-flex h-8 lg:h-10 text-lg w-fit bg-white text-black">
              Download App
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
