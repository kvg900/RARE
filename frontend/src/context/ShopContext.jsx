import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

// const ShopContextProvider = () => {
//   const currency = "$";
//   const deliveryFee = 10;
//   const value = {
//     products,
//     currency,
//     deliveryFee,
//   };
//   return (
//     <ShopContext.Provider value={value}>
//       {this.props.children}
//     </ShopContext.Provider>
//   );
// };
const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for(item in cartItems[items])
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
