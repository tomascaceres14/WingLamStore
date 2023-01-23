import React from "react";
import { useState } from "react";

const cartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <cartContext.Provider value={{ items, setItems }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
