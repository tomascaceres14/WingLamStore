import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoutes from "./components/ProtectedRoutes";
// import axios from "axios";
import JsonData from "./data/data.json";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:8080/api/v1/products").then((e) => {
    //   setProducts(e.data);
    // });
    setProducts(JsonData);
    setCartItems(
      localStorage.getItem("wingLamCart") != null
        ? JSON.parse(localStorage.getItem("wingLamCart"))
        : []
    );
  }, []);

  const addToCartHandler = (product) => {
    const productExists = cartItems.find(
      (item) => item.productId === product.productId
    );

    if (productExists) {
      cartItems.forEach((item) => {
        if (item.productId === product.productId) {
          item.quantity += 1;
          localStorage.setItem("wingLamCart", JSON.stringify(cartItems));
          setCartItems(JSON.parse(localStorage.getItem("wingLamCart")));
        }
      });
    } else {
      product.quantity = 1;
      cartItems.push(product);
      localStorage.setItem("wingLamCart", JSON.stringify(cartItems));
      setCartItems(JSON.parse(localStorage.getItem("wingLamCart")));
    }
  };

  return (
    <div>
      <Navigation hasItems={cartItems.length} />
      <Routes>
        <Route
          path="/productos"
          element={
            <Products data={products} addToCartHandler={addToCartHandler} />
          }
        />
        <Route
          path="/carrito"
          element={
            <Cart
              cartItems={cartItems}
              addToCartHandler={addToCartHandler}
              setCartItems={setCartItems}
            />
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
