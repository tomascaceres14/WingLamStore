import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, cart }) => {
  const [wingLamCart, setWingLamCart] = useState([]);

  useEffect(() => {
    setWingLamCart(
      localStorage.getItem("wingLamCart") != null
        ? JSON.parse(localStorage.getItem("wingLamCart"))
        : []
    );
  }, []);

  const addToCartHandler = (p) => {
    wingLamCart.forEach((e) => {
      Reflect.deleteProperty(e, "quantity");
    });
    if (wingLamCart.includes(p)) {
      wingLamCart[wingLamCart.indexOf(p)].quantity += 1;
      localStorage.setItem("wingLamCart", JSON.stringify(wingLamCart));
    } else {
      p.quantity = 1;
      wingLamCart.push(p);
      localStorage.setItem("wingLamCart", JSON.stringify(wingLamCart));
      cart();
    }
  };

  return (
    <div className="container-fluid products row">
      {data
        ? data.map((d, i) => (
            <ProductCard
              data={d}
              handler={addToCartHandler}
              key={"product-card-" + i}
              id={i}
            />
          ))
        : "Loading..."}
    </div>
  );
};

export default ProductList;
