import { useState } from "react";
import Banner from "./components/Banner";
import "./index.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import SaleCounter from "./components/SaleCounter";
import ProductCard from "./components/ProductCard";
function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Menu />
      <SaleCounter />
      <ProductCard />
    </>
  );
}

export default App;
