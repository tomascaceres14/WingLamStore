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

  function getOcurrence(value) {
    var count = 1;
    wingLamCart.forEach((v) => v.name === value && count++);
    return count;
  }

  const addToCartHandler = (p) => {
    if (wingLamCart.includes(p)) {
      wingLamCart[wingLamCart.indexOf(p)].quantity += 1;
      localStorage.setItem("wingLamCart", JSON.stringify(wingLamCart));
      console.log(wingLamCart);
    } else {
      p.quantity = 1;
      wingLamCart.push(p);
      localStorage.setItem("wingLamCart", JSON.stringify(wingLamCart));
      cart();
      console.log(p);
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
            />
          ))
        : "Loading..."}
    </div>
  );
};

export default ProductList;
