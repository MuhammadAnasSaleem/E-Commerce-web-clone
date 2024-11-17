import React from "react";
import gamepad from "../assets/photos/products/gamepad.png";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
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

export default function Mycard(props) {
  return (
    <div className="">
      <div className="w-64 h- bg-gray-200 p-3 rounded">
        <div className="flex justify-between">
          {props.discount && (
            <div>
              <p
                className={`text-white w-14 ${props.classname} flex justify-center items-center text-xs h-6`}
              >
                {props.discount}%
              </p>
            </div>
          )}
          <div className="space-y-3">
            <div
              className="w-8 h-8 bg-white flex justify-center
         items-center text-2xl rounded-full"
            >
              <CiHeart />
            </div>

            <div
              className="w-8 h-8 bg-white flex justify-center
         items-center text-2xl rounded-full"
            >
              <FiEye />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={props.img}
            alt=""
            className="w-32 h-32 object-contain hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="mt-5 leading-9">
          <p className="text-base font-medium">{props.title}</p>
        </div>
        <div>
          <p className="text-[#db4444] flex gap-3">
            {props.price}
            <span className="line-through text-gray-400">
              {props.originalPrice}
            </span>
          </p>
        </div>
        <StarRating rating={props.rating} />
      </div>
    </div>
  );
}
