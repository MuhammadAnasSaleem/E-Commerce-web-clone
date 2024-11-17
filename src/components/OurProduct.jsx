import React from "react";
import Redbox from "./Redbox";
import OurProductSlider from "./OurProductSlider";
import Mycard from "./Mycard";
import Button from "./Button";
import electriccar from "../assets/photos/products/electriccar.png";
import soccercleats from "../assets/photos/products/soccercleats.png";
import usbgamepad from "../assets/photos/products/usbgamepad.png";
import jacket from "../assets/photos/products/jacket.png";

export default function OurProduct() {
  return (
    <div className="mx-135px overflow-hidden mt-[71px]">
      <div className=" flex flex-col mx-[135px] ">
        <Redbox text="Our Products" />
        <div className="font-semibold text-4xl mt-5">Explore Our Products</div>
      </div>
      <OurProductSlider />
      <div className="flex mt-[60px] gap-[20px] w-full mx-[135px]">
        <Mycard
          img={electriccar}
          title="Kids Electric Car"
          price="960$"
          rating="5"
          discount="New"
          classname="bg-[#00FF66]"
        />
        <Mycard
          img={soccercleats}
          title="Jr. Zoom Soccer Cleats"
          price="1160$"
          rating="5"
        />
        <Mycard
          img={usbgamepad}
          title="GP11 Shooter USB Gamepad"
          price="660$"
          rating="4"
          discount="New"
          classname="bg-[#00FF66]"
        />
        <Mycard
          img={jacket}
          title="Quilted Satin Jacket"
          price="660$"
          rating="4"
        />
      </div>
      <div className="flex justify-center mt-[60px]">
        <Button
          text="View All Products"
          classname="px-[48] py-[16] rounded w-[234px] h-[56px]"
        />
      </div>
    </div>
  );
}
