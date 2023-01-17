import "./App.css";
import Navigation from "./components/Navigation";
import JsonData from "./data/data.json";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { createBrowserRouter, Route, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/productos",
    element: <Products />,
  },
  {
    path: "/carrito",
    element: <Cart />,
  },
]);

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/productos" element={<Products data={data.Products} />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
      {/* <Products data={data.Products} /> */}
      {/* <Cart data={data.Products} /> */}
    </div>
  );
}

export default App;
