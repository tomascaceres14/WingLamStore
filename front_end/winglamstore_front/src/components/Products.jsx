import React, { useEffect, useState } from "react";

const Products = ({ data, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);

  const clickHandler = (p) => {
    products.push(p);
    localStorage.setItem("cart", JSON.stringify(products));
    cart();
  };

  return (
    <div className="container-fluid products row">
      {data
        ? data.map((d, i) => (
            <div className="card" key={"product" + i}>
              <img src={d.imgUrl} alt={d.name} srcSet="" />
              <div className="card-body text-center">
                <h5 className="card-title">{d.name}</h5>
                <p className="card-text">${d.price}</p>
                <button
                  href="#"
                  className="btn btn-warning"
                  onClick={() => clickHandler(d)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart-plus-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                  </svg>{" "}
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Products;
