import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  // console.log("Products from context:", products);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    // console.log("Running bestseller filter");
    const bestProduct = products.filter((item) => {
      // console.log(item.name, "->", item.bestSeller); // <--- see which are true
      return item.bestSeller === true;
    });
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          perferendis quis corporis suscipit reprehenderit hic natus cum at,
          aliquid voluptatibus nihil, quisquam maxime est dolores distinctio
          fugit, atque quo! Reiciendis?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.length === 0 ? (
          <p className="text-center col-span-full">No bestsellers found.</p>
        ) : (
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
