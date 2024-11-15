import React from "react";
import ProductSlider from "./ProductSlider";
import SaleCounter from "./SaleCounter";
import Button from "./Button";

export default function Flashsale() {
  return (
    <div>
      <SaleCounter />
      <ProductSlider />
      <div className="flex justify-center mt-[60px]">
        <Button
          text="button"
          classname="px-[48] py-[16] rounded w-[234px] h-[56px]"
        />
      </div>
      <div className="mt-[60px] w-full border-t-2 border-gray-300 mx-auto max-w-[calc(100%-270px)]"></div>
    </div>
  );
}
