import React from "react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";

export default function () {
  return (
    <div className=" h-28 flex justify-around items-center">
      <img src={logo} alt="logo" width={100} height={100} />
      <div className="w-60 px-2 h-10 rounded flex justify-center items-center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>
    </div>
  );
}
