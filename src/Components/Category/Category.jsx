import React from "react";
import { GiSailboat } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import { FaCity } from "react-icons/fa6";
import { GiForest } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { FaPersonHiking } from "react-icons/fa6";
import Banner1 from "./Banner1";

const Category = () => {
  return (
    <div className="bg-[#f7f8fa] py-[100px]">
      <div className="text-center py-9">
        <h1 className="font-kaushanscript text-primary text-2xl">Browser By Category</h1>
        <h1 className="font-sans font-bold text-4xl">Pick A Tour Type</h1>
      </div>
      <div className="flex text-center justify-center container mx-auto gap-8 px-12 py-8 ">
        <div className="bg-white px-12 py-8 shadow-md rounded-md">
          <div className="text-4xl mb-2 bg-[#f8d448] py-5 px-4 rounded-full">
            <FaCity className="text-black text-5xl mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-2">City Tours</h2>
          <p className="text-gray-600">10 Tours+</p>
        </div>

        <div className="bg-white px-12 py-8  shadow-md rounded-md">
          <div className="text-4xl mb-2 bg-[#f8d448] py-5 px-5 rounded-full">
            <TbBeach className="text-black text-5xl mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-2">Beaches</h2>
          <p className="text-gray-600">10 Tours+</p>
        </div>

        <div className="bg-white px-12 py-8  shadow-md rounded-md">
          <div className="text-4xl mb-2 bg-[#f8d448] py-6 px-5 rounded-full">
            <GiSailboat className="text-black text-5xl mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-2">Boat Tours</h2>
          <p className="text-gray-600">10 Tours+</p>
        </div>

        <div className="bg-white px-12 py-8  shadow-md rounded-md">
          <div className="text-4xl mb-2 bg-[#f8d448] py-5 px-4 rounded-full">
            <GiForest className="text-black text-5xl mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-2">Adventure</h2>
          <p className="text-gray-600">10 Tours+</p>
        </div>

        <div className="bg-white px-12 py-8  shadow-md rounded-md">
          <div className="text-4xl mb-2 bg-[#f8d448] py-4 px-4 rounded-full">
            <BiDish className="text-black text-5xl mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-2">Food</h2>
          <p className="text-gray-600">10 Tours+</p>
        </div>

        <div className="bg-white px-12 py-8  shadow-md rounded-md">
          <div className="text-4xl mb-2 bg-[#f8d448] py-7 px-2 rounded-full">
            <FaPersonHiking className="text-black text-4xl mx-auto" />
          </div>
          <h2 className="text-xl font-bold mb-2">Hiking</h2>
          <p className="text-gray-600">Description 6</p>
        </div>
      </div>
      <Banner1/>
    </div>
  );
};

export default Category;
