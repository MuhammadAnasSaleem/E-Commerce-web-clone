import React from "react";
import Redbox from "./Redbox";
import CategorySlider from "./CategorySlider";

export default function Categories() {
  return (
    <div className="mt-20 flex flex-col ">
      <Redbox text="Categories " />
      <div className="font-semibold text-4xl mt-5">Browse By Category</div>
      <CategorySlider />
      <div className="mt-[70px] w-full border-t-2 border-gray-300 mx-auto "></div>
    </div>
  );
}
