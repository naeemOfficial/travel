import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "../../assets/travel.png";
import { PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto flex justify-between">
       
        <div className="flex flex-col items-center">
         
          <img src={img} alt="Logo" className="mr-20 mb-7 w-16 h-16" />

         
          <div>
            <h1 className="text-lg font-kaushanscript">Need any help?</h1>
            <p className="font-bold mb-3">
              Call Us:{" "}
              <span className="text-yellow-400 font-bold">+123456789</span>
            </p>
            <p>Address: 123 Street, City</p>
            <p className="mb-6">Email: your@gmail.com</p>
          </div>

          
          <div className="flex text-xl gap-4 pr-20">
            <FaSquareFacebook />
            <IoLogoTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="border-l border-[#727272] h-[100ox]  mx-8"></div>
        
        <div className="flex gap-12 mt-12">
          <div>
            <h1 className="font-kaushanscript mb-4">Company</h1>
            <ul className="text-zinc-300">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Travel Guides</li>
              <li>Data Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="font-kaushanscript mb-4">Top Destination</h1>
            <ul className="text-zinc-300">
              <li>Las Vegas</li>
              <li>New York City</li>
              <li>Japan</li>
              <li>Hawaii</li>
            </ul>
          </div>
          <div>
            <ul className="mt-10 text-zinc-300">
              <li>Tokyo</li>
              <li>Dilhi</li>
              <li>Dubai</li>
              <li>Sydney</li>
            </ul>
          </div>
        </div>

        <div className="border-l border-[#727272] h-[100ox]  mx-8"></div>
        
        <div className="pr-20 mt-12">
            <h1 className="font-kaushanscript mb-3">Sign Up Newletter</h1>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Enter email..."
              className="px-4 py-2 border border-gray-300 rounded-md pl-8" 
              style={{ width: "200px" }} 
            />
            <div
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <PiTelegramLogoLight className="text-[#727272]" />
            </div>
          </div>
          <div>
            <button className="py-2 px-5 bg-yellow-400 rounded-md mt-2">
                Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
