import React from "react";
import FlashSaleSlider from "./FlashSaleSlider";
import SaleCounter from "./SaleCounter";
import Button from "./Button";

export default function Flashsale() {
  return (
    <div>
      <SaleCounter />
      <FlashSaleSlider />
      <div className="flex justify-around mt-[60px]">
        <Button
          text="View All Products"
          classname="px-[48] py-[16] rounded w-[234px] h-[56px]"
          link="/products"
        />
      </div>
      <div className="mt-[60px] w-full border-t-2 border-gray-300 mx-auto max-w-[calc(100%-270px)]"></div>
    </div>
  );
}
