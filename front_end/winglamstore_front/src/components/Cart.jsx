import React, { useEffect, useState } from "react";

const Cart = (props) => {
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    setItems(localStorage.getItem("cartProducts"));
    setItemsCount(items.length());
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.data
          ? props.data.map((d, i) => (
              <tr>
                <th scope="row" key={`${d}-${i}`}>
                  {i + 1}
                </th>
                <td>{d.name}</td>
                <td>${d.price}</td>
                <td className="td-btn-remove">
                  <button type="button" className="btn-remove">
                    Eliminar del carrito
                  </button>
                </td>
              </tr>
            ))
          : "Loading..."}
      </tbody>
    </table>
  );
};

export default Cart;
