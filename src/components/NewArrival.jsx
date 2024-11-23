import React from "react";
import Redbox from "./Redbox";
import playstation from "../assets/photos/linkBanners/playstationbanner.png";
import womencollection from "../assets/photos/linkBanners/womencollectionbanner.png";
import speakers from "../assets/photos/linkBanners/speakersbanner.png";
import perfumes from "../assets/photos/linkBanners/perfumebanner.png";

export default function NewArrival() {
  return (
    <div className="mt-[140px] ">
      <div className="flex flex-col">
        <Redbox text="Featured" />
        <div className="font-semibold text-4xl mt-5">New Arrival</div>
      </div>
      <div className="flex gap-[30px] mt-[60px]">
        <div>
          <img
            src={playstation}
            alt=""
            className="w-[570px] h-[600px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[32px]">
          <div>
            <img
              src={womencollection}
              alt=""
              className="w-[570px] h-[284px] cursor-pointer"
            />
          </div>
          <div className="flex gap-[30px]">
            <div>
              <img
                src={speakers}
                alt=""
                className="w-[270px] h-[284px] cursor-pointer"
              />
            </div>
            <div>
              <img
                src={perfumes}
                alt=""
                className="w-[270px] h-[284px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
