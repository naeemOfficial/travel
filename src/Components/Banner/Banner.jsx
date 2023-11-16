import React from "react";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoFlagOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-primary">
      <div className="relative  h-[800px] container mx-auto flex items-center justify-between">
        
        <div className="absolute left-4 text-white">
          <h3 className="text-3xl font-kaushanscript text-yellow-400 mb-5">
            Explore The
          </h3>
          <h1 className="text-7xl font-sans font-bold mb-1">
            Travel & <br /> Adventures
          </h1>
          <p className="text-lg">
            Find awesome hotel, tour, car and activities in london
          </p>
        </div>

        
        <div className="absolute right-4 flex">
          <img
            src={img1}
            alt="Image 1"
            className="w-[500px] h-[400px] mr-8 mt-36"
          />
          <img src={img2} alt="Image 2" className="w-[400px] h-[650px] mt-36" />
        </div>

        
        <div className="absolute bottom-4 left-1/2 flex bg-white py-10 px-8 rounded-lg gap-5 transform -translate-x-1/2 mb-6">
          <div>
            <h1 className="font-kaushanscript">Destination</h1>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="where to go?"
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
          </div>
          <div>
            <h1 className="font-kaushanscript">Type</h1>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Activity"
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
                <IoFlagOutline className="text-[#727272]" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-kaushanscript">When</h1>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Date"
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
                <MdDateRange className="text-[#727272]" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-kaushanscript">Guests</h1>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="0"
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
                <MdOutlinePeopleAlt className="text-[#727272]" />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#f8d448] px-7 py-2 mt-6 rounded-md font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
