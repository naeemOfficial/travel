import React from "react";
import img1 from "../../assets/user1.jpg";
import img2 from "../../assets/user2.jpg";
import img3 from "../../assets/user3.jpg";
import img4 from "../../assets/user4.jpg";
import img5 from "../../assets/user5.jpg";
import img6 from "../../assets/user6.jpg";
import img7 from "../../assets/user7.jpg";
import img8 from "../../assets/user8.jpg";
import img9 from "../../assets/quotation.png";

const Testimonial = () => {
  return (
    <div className="flex justify-center mx-auto items-center gap-56 py-36">
     
      <div className="flex flex-col mt-44">
        <div className="flex pl-5">
          <img
            src={img4}
            alt="Image 1"
            className="w-16 h-16 rounded-full object-cover ml-8 mb-12"
          />
        </div>
        <div className="">
          <img
            src={img5}
            alt="Image 2"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div className="flex ml-24">
          <img
            src={img1}
            alt="Image 3"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="flex mr-11">
          <img
            src={img8}
            alt="Image 4"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>

      
      <div className="mx-8 text-center max-w-xl space-y-4 mb-40">
        <p className="text-2xl font-caveatt font-semibold text-primary">
          Testimonial
        </p>
        <p className="text-5xl font-bold pb-20">
          What our customer <br />
          says about us
        </p>
        <div className="flex justify-center ">
          <img src={img9} alt="" />
        </div>
        <p className="text-lg font-sans font-bold">
          "There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered altera,tion in some form, by injected
          humour, or randomised words which don't look even m you"
        </p>
        <p className="text-lg text-[#727272]">-By lara datta actor </p>
      </div>

      
      <div className="flex flex-col mt-44">
        <div className="flex pr-32">
          <img
            src={img2}
            alt="Image 5"
            className="w-16 h-16 object-cover rounded-full mb-3"
          />
        </div>
        <div className="flex ml-28">
          <img
            src={img3}
            alt="Image 6"
            className="w-10 h-10 object-cover rounded-full mb-3"
          />
        </div>
        <div className="flex">
          <img
            src={img6}
            alt="Image 7"
            className="w-14 h-14 object-cover rounded-full mb-3"
          />
        </div>
        <div className="ml-20">
          <img
            src={img7}
            alt="Image 8"
            className="w-32 h-32 object-cover rounded-full mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
