import "./App.css";
import Navigation from "./components/Navigation";
import JsonData from "./data/data.json";
import { useEffect, useState } from "react";
import Products from "./components/Products";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Products data={data.Products} />
      {/* <Cart data={data.Products} /> */}
    </div>
  );
}

export default App;
