import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, cart }) => {
  const [wingLamCart, setwingLamCart] = useState([]);

  useEffect(() => {
    setwingLamCart(
      localStorage.getItem("wingLamCart")
        ? JSON.parse(localStorage.getItem("wingLamCart"))
        : []
    );
  }, []);

  const addToCartHandler = (p) => {
    console.log(p);
    wingLamCart.push(p);
    localStorage.setItem("wingLamCart", JSON.stringify(wingLamCart));
    cart();
  };

  return (
    <div className="container-fluid products row">
      {data
        ? data.map((d, i) => (
            <ProductCard
              data={d}
              handler={addToCartHandler}
              key={"product-card-" + i}
            />
          ))
        : "Loading..."}
    </div>
  );
};

export default ProductList;
