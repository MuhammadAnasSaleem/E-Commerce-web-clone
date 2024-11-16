import React from "react";
import Redbox from "./Redbox";
import FlashSaleSlider from "./FlashSaleSlider";
import OurProductSlider from "./OurProductSlider";

export default function OurProduct() {
  return (
    <div className="mx-135px ">
      <div className="mt-[71px] flex flex-col mx-[135px] ">
        <Redbox text="Our Products" />
        <div className="font-semibold text-4xl mt-5">Explore Our Products</div>
      </div>
      <OurProductSlider />
    </div>
  );
}
