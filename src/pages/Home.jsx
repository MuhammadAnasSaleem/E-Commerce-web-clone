import Banner from "../components/Banner";
import "../index.css";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Flashsale from "../components/Flashsale";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import OurProduct from "../components/OurProduct";
import NewArrival from "../components/NewArrival";
import Services from "../components/Services";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
  return (
    <div>
      {" "}
      <div id="top"></div>
      <Banner />
      <Navbar />
      <Menu />
      <Flashsale />
      <Categories />
      <BestSelling />
      <OurProduct />
      <NewArrival />
      <Services />
      <Footer />
    </div>
  );
}
