import React from "react";
import banner from "../assets/photos/banner.webp";
import Slider from "./Slider";

export default function Menu() {
  return (
    <div className="flex justify-around pt-10">
      <div>
        <ul className="flex flex-col gap-4 ">
          <li className="cursor-pointer hover:underline">Woman’s Fashion </li>
          <li className="cursor-pointer hover:underline">Men’s Fashion</li>
          <li className="cursor-pointer hover:underline">Electronics</li>
          <li className="cursor-pointer hover:underline">Home & Lifestyle</li>
          <li className="cursor-pointer hover:underline">Medicine</li>
          <li className="cursor-pointer hover:underline">Sports & Outdoor</li>
          <li className="cursor-pointer hover:underline">Baby’s & Toys</li>
          <li className="cursor-pointer hover:underline">Groceries & Pets</li>
          <li className="cursor-pointer hover:underline">Health & Beauty</li>
        </ul>
      </div>
      <div className="pl-6 border-l-[1px] border-slate-400 h-[344px] w-[892px] flex justify-center items-center overflow-hidden">
        {/* <img className="h-[344px] w-[892px]" src={banner} alt="" /> */}
        <Slider />
      </div>
    </div>
  );
}
