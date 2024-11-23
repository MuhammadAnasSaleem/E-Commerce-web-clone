import React, { useRef } from "react";
import Mycard from "./Mycard";
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
import keyboard from "../assets/photos/products/keyboard.png";
import chair from "../assets/photos/products/comfortchair.png";
import gamepad from "../assets/photos/products/gamepad.png";
import gamingmoniter from "../assets/photos/products/gamingmoniter.png";
import dogfood from "../assets/photos/products/dogfood.png";
import camera from "../assets/photos/products/dslrcamera.png";
import laptop from "../assets/photos/products/gaminglaptop.png";

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
      discount: "40%",
      classname: "bg-primary",
    },
    {
      img: chair,
      title: "chair",
      price: "$375",
      originalPrice: "$400",
      rating: 4.5,
      discount: "40%",
      classname: "bg-primary",
    },
    {
      img: gamepad,
      title: "gamepad",
      price: "$120",
      originalPrice: "$160",
      rating: 5,
      discount: "40%",
      classname: "bg-primary",
    },
    {
      img: gamingmoniter,
      title: "gamingmoniter",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
      discount: "40%",
      classname: "bg-primary",
    },

    {
      img: dogfood,
      title: "Breed Dry Dog Food",
      price: "$100",
      rating: 3,
      discount: "NEW",
      classname: "bg-green-500",
    },
    {
      img: camera,
      title: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4,
      discount: "NEW",
      classname: "bg-green-500",
    },
    {
      img: laptop,
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      discount: "NEW",
      classname: "bg-green-500",
    },
    {
      img: gamingmoniter,
      title: "gamingmoniter",
      price: "$370",
      originalPrice: "$400",
      rating: 5,
      discount: "40%",
      classname: "bg-primary",
    },
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
          className="z-10 flex justify-between"
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
                img={item.img} // these are product details
                title={item.title} //this is product name
                price={item.price}
                originalPrice={item.originalPrice}
                rating={item.rating}
                discount={item.discount}
                classname={item.classname}
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
