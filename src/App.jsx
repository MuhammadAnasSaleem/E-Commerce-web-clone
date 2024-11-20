import Banner from "./components/Banner";
import "./index.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Flashsale from "./components/Flashsale";
import Categories from "./components/Categories";
import BestSelling from "./components/BestSelling";
import OurProduct from "./components/OurProduct";
import NewArrival from "./components/NewArrival";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
    <>
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
      <div className="mt-32 flex justify-end pr-8 ">
        <a
          href="#top"
          className="w-[46px] h-[46px] bg-gray-200 rounded-full flex justify-center items-center active:bg-gray-300"
        >
          <FaArrowUp />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default App;
