import "./App.css";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoutes from "./components/ProtectedRoutes";
import axios from "axios";
import CartProvider from "./components/providers/CartProvider";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((e) => {
      setData(e.data);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <CartProvider>
        <Routes>
          <Route path="/productos" element={<Products data={data} />} />
          <Route path="/carrito" element={<Cart />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
