import React from "react";
import delivery from "../assets//photos/facilites/delivery.png";
import customer from "../assets/photos/facilites/customer.png";
import moneyback from "../assets/photos/facilites/moneyback.png";
import { FaArrowUp } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <div className="mx-[135px] mt-[140px] ">
        <div className=" h-[161px]  flex gap-[88px] justify-around">
          <div className="  flex flex-col gap-[24px]">
            <div className="flex flex-col items-center">
              <img src={delivery} alt="" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[20px] ">
                FREE AND FAST DELIVERY
              </p>
              <span className="font-normal text-sm">
                Free delivery for all orders over $140
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-[24px]">
            {" "}
            <div className="flex flex-col items-center">
              <img src={customer} alt="" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[20px] ">
                24/7 CUSTOMER SERVICE
              </p>
              <span className="font-normal text-sm">
                Friendly 24/7 customer support
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-[24px]">
            {" "}
            <div className="flex flex-col items-center">
              <img src={moneyback} alt="" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[20px] ">MONEY BACK GUARANTEE</p>
              <span className="font-normal text-sm">
                We reurn money within 30 days
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-end pr-8 ">
        <a
          href="#top"
          className="w-[46px] h-[46px] bg-gray-200 rounded-full flex justify-center items-center active:bg-gray-300"
        >
          <FaArrowUp />
        </a>
      </div>
    </>
  );
}
