import React from "react";
import gamepad from "../assets/photos/products/gamepad.png";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return (
    <div className="flex">
      {stars}
      <span className="ml-2 text-gray-600">({rating})</span>
    </div>
  );
};

export default function ProductCard() {
  const rating = 4;
  return (
    <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-[270px] h-[350px]">
      <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
        -40%
      </div>

      <div className="w-[180] h-[190]">
        <img
          src={gamepad}
          alt="product img"
          className="m-auto group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <h3 className="font-medium">HAVIT HV-G92 Gamepad</h3>

      <p className="flex gap-3">
        <span className="text-green-500">$120</span>{" "}
        <span className="line-through text-primary">$160</span>
      </p>

      <StarRating rating={rating} />
    </div>
  );
}
