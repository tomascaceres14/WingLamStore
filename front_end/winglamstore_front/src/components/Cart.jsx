import React, { useEffect, useState } from "react";

const Cart = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  useEffect(() => {}, []);

  const deleteHandler = (id) => {
    items.splice(id, 1);
    localStorage.setItem("products", JSON.stringify(items));
    console.log(items);
    setItems(JSON.parse(localStorage.getItem("products")));
  };

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
        {items
          ? items.map((d, i) => (
              <tr key={"cart-item-" + i}>
                <th scope="row" key={`${d}-${i}`}>
                  {i + 1}
                </th>
                <td>{d.name}</td>
                <td>${d.price}</td>
                <td className="td-btn-remove">
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => deleteHandler(i)}
                  >
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
