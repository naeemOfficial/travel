import React from 'react';
import img from '../../assets/banner3.jpg';

const Banner1 = () => {
  return (
    <div className="flex justify-between max-w-5xl mx-auto items-center gap-32 py-24">
      
      <img src={img} alt="" className="w-[500px] h-[700px]" />

      
      <div className="text-white">
        <div className="text-3xl font-bold text-primary font-caveatt mb-6">Why Choose Us</div>
        <div className="text-6xl text-black font-kaushanscript font-bold mb-7">Plan Your Trip <br /> with Trisog</div>
        <div className="text-sm text-[#727272] mb-8 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly</div>
        <button className=" text-black px-7 py-3 border border-[#727272] font-semibold rounded">Contact Us</button>
      </div>
    </div>
  );
};

export default Banner1;
