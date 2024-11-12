import { useState } from "react";
import Banner from "./components/Banner";
import "./index.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Menu />
    </>
  );
}

export default App;
