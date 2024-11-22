import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Mycard from "../components/Mycard";

export default function Products() {
  const ApiKey = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProductData = async () => {
    try {
      const response = await axios.get(ApiKey);
      setProducts(response?.data?.products || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    const searchProduct = () => {
      const result = products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(result);
    };

    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      searchProduct();
    }
  }, [searchTerm, products]);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center items-center mt-10 bg-[#cfcfcf] w-60 rounded mx-auto">
        <input
          type="search"
          className="outline-none text-sm bg-transparent h-10 text-center"
          placeholder="Search Your Product."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <CiSearch className="text-3xl" />
      </div>
      <div className="flex justify-around flex-wrap gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Mycard
              key={item.id}
              title={item.title}
              img={item.thumbnail}
              price={(
                parseFloat(item.price) -
                parseFloat(item.price) * (item.discountPercentage / 100)
              ).toFixed(2)}
              rating={item.rating}
              discount={`${item.discountPercentage}%`}
              classname="bg-primary"
              originalPrice={item.price}
            />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
}
