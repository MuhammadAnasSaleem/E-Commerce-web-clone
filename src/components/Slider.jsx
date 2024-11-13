import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import banner1 from "../assets/photos/banners/banner1.jpg";
import banner2 from "../assets/photos/banners/banner2.jpg";
import banner3 from "../assets/photos/banners/banner3.webp";
import banner4 from "../assets/photos/banners/banner4.jfif";
import banner5 from "../assets/photos/banners/banner5.jfif";
import banner6 from "../assets/photos/banners/banner6.jpg";
const images = [banner3, banner2, banner1, banner4, banner5, banner6];

export default function Slider() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
    },
    swiperSlide: {
      display: "flex", // Flexbox to center the image within the slide
      justifyContent: "center",
      alignItems: "center",
      height: "100%", // Ensure slides take full height of the container
      width: "100%", // Ensure slides take full width of the container
    },
  };
  return (
    <div style={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={styles.swiperSlide}>
            <img src={img} alt={`banner-${index}`} style={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
