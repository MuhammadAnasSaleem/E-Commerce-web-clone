import React from "react";
import Redbox from "./Redbox";
import FlashSaleSlider from "./FlashSaleSlider";
import OurProductSlider from "./OurProductSlider";
import Mycard from "./Mycard";

export default function OurProduct() {
  return (
    <div className="mx-135px ">
      <div className="mt-[71px] flex flex-col mx-[135px] ">
        <Redbox text="Our Products" />
        <div className="font-semibold text-4xl mt-5">Explore Our Products</div>
      </div>
      <OurProductSlider />
      <div className="flex mt-[60px] gap-[20px] w-full mx-[135px]">
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
      </div>
    </div>
  );
}
