import React from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import img from "../../assets/travel.png";
import {
  FaHome,
} from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white font-mulish w-full">
        <div className="container mx-auto px-4 lg:py-3">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center gap-4">
                  <img className="h-14 w-14" src={img} alt="Logo" />
                  <h1 className="text-3xl font-yoshida font-bold text-black">Trisog</h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:block ml-10 justify-start items-start space-x-8">
              <Link
                to="/"
                className="text-black hover:text-red-600 rounded-md text-base font-semibold"
              >
                Home
              </Link>
              <Link
                to="/details"
                className="text-black hover:text-red-600 rounded-md text-base font-semibold"
              >
                Details 
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-red-600 rounded-md text-base font-semibold"
              >
                About
              </Link>
            </div>
            <div className="hidden md:block">
              <Link
                to="/login"
                className="text-black hover:bg-primary hover:text-white border-2 px-5 py-2 rounded-3xl text-lg font-semibold"
              >
                Login
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleToggle}
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={handleToggle}
          direction="left"
          className="z-50"
          style={{
            position: "fixed",
            height: "100%",
            width: "250px",
            background: "#16377e",
          }}
        >
          <div className="px-4 py-4 text-white">
            <Link to="/" className="flex items-center gap-4 mb-5">
              <img
                className="h-20 w-20 bg-primary px-auto"
                src={img}
                alt="Logo"
              />
              <h1 className="text-3xl font-yoshida font-bold text-white mt-3">Trisog</h1>
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 mt-3 text-sm"
              onClick={handleToggle}
            >
              <FaHome className="inline-block h-6 w-5 mr-2" /> Home
            </Link>
            <Link
              to="/details"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <BiDetail className="inline-block h-6 w-5 mr-2" />{" "}
              Details
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <IoIosPeople className="inline-block h-6 w-5 mr-2" /> About
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <FaSignInAlt className="inline-block h-6 w-5 mr-2" /> Login
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
