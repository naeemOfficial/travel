import React from "react";
import img1 from "../../assets/twitter.png";
import img2 from "../../assets/linkedin.png";
import img3 from "../../assets/google.png";
import img4 from "../../assets/pinterest.png";
import img5 from "../../assets/arrow-down-sign-to-navigate.png";

const Info = () => {
  return (
    <div className="bg-[#f2f3f5] p-4 lg:px-16 flex flex-col lg:flex-row">
      <div className="mb-4 lg:mb-0 lg:flex-1 flex items-center justify-center lg:justify-start">
        <p className="text-xs lg:text-base text-[#727272]">
          000-000-000-000 | info@trisog.com
        </p>
      </div>
      <div className="lg:flex-1 flex items-center justify-center lg:justify-end">
        <div className="flex gap-4 items-center">
          <img src={img1} alt="" className="h-4" />
          <img src={img2} alt="" className="h-4" />
          <img src={img3} alt="" className="h-4" />
          <img src={img4} alt="" className="h-4" />
          <h3 className="text-xs lg:text-base text-[#727272] font-semibold">
            <span className="hidden lg:inline-block">|</span> EUR{" "}
          </h3>
          <img src={img5} alt="" className="h-3 lg:h-4 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Info;
