import React, { useRef } from "react";
import Mycard from "./Mycard"; // Import Mycard Component
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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import keyboard from "../assets/photos/products/keyboard.png";
import chair from "../assets/photos/products/comfortchair.png";
import gamepad from "../assets/photos/products/gamepad.png";
import gamingmoniter from "../assets/photos/products/gamingmoniter.png";

export default function CardListSlider({
  title,
  type = "category",
  numberOfCards,
  product = [
    {
      img: keyboard,
      title: "Keyboard",
      price: "$960",
      originalPrice: "$1160",
      rating: 4,
    },
    {
      img: chair,
      title: "chair",
      price: "$375",
      originalPrice: "$400",
      rating: 4.5,
    },
    {
      img: gamepad,
      title: "gamepad",
      price: "$120",
      originalPrice: "$160",
      rating: 5,
    },
    {
      img: gamingmoniter,
      title: "gamingmoniter",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
    },
    {
      img: keyboard,
      title: "Keyboard",
      price: "$960",
      originalPrice: "$1160",
      rating: 4,
    },
    {
      img: chair,
      title: "chair",
      price: "$375",
      originalPrice: "$400",
      rating: 4.5,
    },
    {
      img: gamepad,
      title: "gamepad",
      price: "$120",
      originalPrice: "$160",
      rating: 5,
    },
    {
      img: gamingmoniter,
      title: "gamingmoniter",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
    },
  ], // Ensure product is an array
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
    <div className="my-14 ml-[135px]">
      <div className="mb-8 flex justify-between">
        <div className="relative flex w-full items-center">
          <h3 className="text-xl font-semibold text-secondary">{title}</h3>

          <div className="absolute right-10 flex gap-1 mid:gap-5">
            <div onClick={slidePrev}>
              <FaAngleLeft className="cursor-pointer text-lg mid:text-2xl bg-gray-200 rounded-full p-1 w-8 h-8" />
            </div>
            <div onClick={slideNext}>
              <FaAngleRight className="cursor-pointer text-lg mid:text-2xl bg-gray-200 rounded-full p-1 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div>Loading...</div> // Placeholder while loading products
      ) : (
        <Swiper
          className="z-10"
          ref={swiperRef}
          modules={
            autoplay
              ? [Navigation, Pagination, Scrollbar, A11y, Autoplay]
              : [Navigation, Pagination, Scrollbar, A11y]
          }
          slidesPerView={5}
          spaceBetween={16}
          autoplay={{ pauseOnMouseEnter: false, delay: 2500 }}
          loop={true}
          breakpoints={{
            1920: { slidesPerView: 5 },
            1440: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            464: { slidesPerView: 3 },
            350: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
        >
          {product.map((item, index) => (
            <SwiperSlide key={index}>
              <Mycard
                img={item.img} // Product Image
                title={item.title} // Product Title
                price={item.price} // Product Price
                originalPrice={item.originalPrice} // Original Price (if any)
                rating={item.rating} // Product Rating
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

CardListSlider.defaultProps = {
  type: "category",
  numberOfCards: 5,
  autoplay: false,
};
