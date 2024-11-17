import React from "react";
import Redbox from "./Redbox";
import Button from "./Button";
import Mycard from "./Mycard";
import northcoat from "../assets/photos/products/northcoat.png";
import guccibag from "../assets/photos/products/guccibag.png";
import bookshelf from "../assets/photos/products/bookshelf.png";
import cpucooler from "../assets/photos/products/cpucooler.png";
import speakerbanner from "../assets/photos/banners/speakerbanner.png";

export default function BestSelling() {
  return (
    <div className="mt-20 flex flex-col mx-[135px] overflow-hidden ">
      <Redbox text="This Month" />
      <div className="flex justify-between items-center">
        {" "}
        <div className="font-semibold text-4xl mt-5">
          Best Selling This Month
        </div>
        <Button
          text="View All"
          classname="py-4 px-12 w-[159px] h-[56px] rounded"
        />
      </div>
      <div
        className="flex mt-[60px] gap-[20px] w-full
      "
      >
        <Mycard
          img={northcoat}
          title="The North Coat"
          price="$260"
          originalPrice="$360"
          rating="5"
        />
        <Mycard
          img={guccibag}
          title="Gucci duffle bag"
          price="$960"
          originalPrice="$1160"
          rating="5"
        />
        <Mycard
          img={cpucooler}
          title="RGB liquid CPU Cooler"
          price="$160"
          originalPrice="$170"
          rating="5"
        />
        <Mycard
          img={bookshelf}
          title="Small BookSelf"
          price="$360"
          rating="5"
        />
      </div>
      <div className="mt-[140px] w-[1170px] h-[500px]">
        <img className="object-cover" src={speakerbanner} alt="" />
      </div>
    </div>
  );
}
