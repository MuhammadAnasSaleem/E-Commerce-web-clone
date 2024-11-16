import { useState } from "react";
import Banner from "./components/Banner";
import "./index.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import SaleCounter from "./components/SaleCounter";
import ProductCard from "./components/ProductCard";
import Mycard from "./components/Mycard";
import gamepad from "./assets/photos/products/gamepad.png";
import keyboard from "./assets/photos/products/keyboard.png";
import moniter from "./assets/photos/products/gamingmoniter.png";
import chair from "./assets/photos/products/comfortchair.png";
import ProductSlider from "./components/ProductSlider";
import Flashsale from "./components/Flashsale";
import Button from "./components/Button";
import Redbox from "./components/Redbox";
import Categorybox from "./components/Categorybox";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Menu />
      <Flashsale />
      <Categories />
      <Categories />
    </>
  );
}

export default App;
