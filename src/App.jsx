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
function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Menu />
      <SaleCounter />
      <div className="flex justify-around items-center  gap-3">
        <Mycard img={keyboard} />
        <Mycard img={gamepad} />
        <Mycard img={chair} />
        <Mycard img={moniter} />
      </div>
    </>
  );
}

export default App;
