import React from "react";
import img1 from "../../assets/hungary.jpg";
import img2 from "../../assets/uk.jpg";
import img3 from "../../assets/australia.jpg";
import img4 from "../../assets/paris.jpg";


const Card = ({ image, placeName, review, reviewer, days, price }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-md mb-4 w-full flex flex-col">
      <img
        src={image}
        alt={placeName}
        className="w-[350px] h-[200px] object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{placeName}</h3>
      <p className="text-gray-600 mb-2">{review}</p>
      <p className="text-gray-500 mb-2">Reviewed by {reviewer}</p>
      <p className="text-gray-500 mb-2">{days} days</p>
      <p className="text-green-600 font-semibold">${price}</p>
    </div>
  );
};

const Feature = () => {
  const cardsData = [
    {
      image: img1,
      placeName: "Beautiful Beach Resort",
      review: "Amazing place to relax and unwind.",
      reviewer: "John Doe",
      days: 5,
      price: 1200,
    },
    {
      image: img2,
      placeName: "Mountain Cabin Retreat",
      review: "Breathtaking views and peaceful surroundings.",
      reviewer: "Jane Smith",
      days: 3,
      price: 800,
    },
    {
      image: img3,
      placeName: "City Skyline Hotel",
      review: "In the heart of the city with modern amenities.",
      reviewer: "Mike Johnson",
      days: 7,
      price: 2000,
    },
    {
      image: img4,
      placeName: "Cozy Countryside Cottage",
      review: "Quaint cottage with a rustic charm.",
      reviewer: "Emily Davis",
      days: 4,
      price: 1000,
    },
  ];

  return (
    <div className="bg-primary py-28">
      <div className="text-center ">
        <h1 className="text-2xl font-kaushanscript text-white font-semibold">Tours</h1>
        <h1 className="text-5xl font-sans font-bold text-white">Featured Tours</h1>
      </div>
      <div className="flex max-w-[1440px] mx-auto justify-center gap-6 py-16">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
