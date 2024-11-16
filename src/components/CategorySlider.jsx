import React, { useRef } from "react";
import Categorybox from "./Categorybox";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import camera from "../assets/photos/categories/Category-Camera.png";
import cellphone from "../assets/photos/categories/Category-CellPhone.png";
import computer from "../assets/photos/categories/Category-Computer.png";
import gamepad from "../assets/photos/categories/Category-Gamepad.png";
import headphone from "../assets/photos/categories/Category-Headphone.png";
import smartwatch from "../assets/photos/categories/Category-SmartWatch.png";

export default function CategorySlider({
  title,
  type = "category",
  numberOfCards,
  product = [
    { img: camera, text: "Cameras" },
    { img: cellphone, text: "CellPhones" },
    { img: computer, text: "Computers" },
    { img: gamepad, text: "GamePads" },
    { img: smartwatch, text: "SmartWatches" },
    { img: headphone, text: "HeadPhone" },
    { img: camera, text: "Cameras" },
    { img: cellphone, text: "CellPhones" },
    { img: computer, text: "Computers" },
    { img: gamepad, text: "GamePads" },
    { img: smartwatch, text: "SmartWatches" },
    { img: headphone, text: "HeadPhone" },
  ],
  autoplay = false,
}) {
  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const isLoading = !product || product.length === 0;

  return (
    <div className="my-14 ">
      <div className="mb-8 flex justify-between">
        <div className="relative flex w-full items-center">
          <h3 className="text-xl font-semibold text-secondary">{title}</h3>

          <div className="absolute right-10 flex gap-1 mid:gap-5">
            <div onClick={slidePrev}>
              <div
                className="bg-gray-200 w-11 h-11 flex justify-center
                    items-center rounded-full"
              >
                <FaArrowLeft />
              </div>{" "}
            </div>
            <div onClick={slideNext}>
              <div
                className="bg-gray-200 w-11 h-11 flex justify-center
                    items-center rounded-full"
              >
                <FaArrowRight />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Swiper
          className="z-10"
          ref={swiperRef}
          modules={
            autoplay
              ? [Navigation, Pagination, Scrollbar, A11y, Autoplay]
              : [Navigation, Pagination, Scrollbar, A11y]
          }
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{ pauseOnMouseEnter: false, delay: 2500 }}
          loop={true}
          breakpoints={{
            1920: { slidesPerView: 6 },
            1440: { slidesPerView: 6 },
            1024: { slidesPerView: 6 },
            464: { slidesPerView: 3 },
            350: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
        >
          {product.map((item, index) => (
            <SwiperSlide key={index}>
              <Categorybox text={item.text} img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

CategorySlider.defaultProps = {
  type: "category",
  numberOfCards: 5,
  autoplay: false,
};
