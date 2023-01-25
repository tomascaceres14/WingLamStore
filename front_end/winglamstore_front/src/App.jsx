import "./App.css";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoutes from "./components/ProtectedRoutes";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((e) => {
      setData(e.data);
    });
    setCartCount(
      localStorage.getItem("wingLamCart")
        ? JSON.parse(localStorage.getItem("wingLamCart")).length
        : 0
    );
  }, []);

  const cartAdd = () => {
    setCartCount(cartCount + 1);
    console.log(cartCount);
  };

  const cartSubstract = () => {
    setCartCount(cartCount - 1);
    console.log(cartCount);
  };

  return (
    <div>
      <Navigation cartCount={cartCount} />
      <Routes>
        <Route
          path="/productos"
          element={<ProductList data={data} cart={cartAdd} />}
        />
        <Route path="/carrito" element={<Cart cart={cartSubstract} />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
