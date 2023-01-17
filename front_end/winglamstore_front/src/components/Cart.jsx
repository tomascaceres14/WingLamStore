import React, { useEffect, useState } from "react";

const Cart = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  const deleteHandler = (id) => {
    items.splice(id, 1);
    localStorage.setItem("products", JSON.stringify(items));
    setItems(JSON.parse(localStorage.getItem("products")));
  };

  function getOcurrence(value) {
    var count = 0;
    items.forEach((v) => v.name === value && count++);
    return count;
  }

  function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
      }
    }
    return unique;
  }

  function generateMessage() {
    let message = "Hola! estos son los productos que deseo adquirir:\n ";
    let dirtyArray = [];

    items.forEach((i) => {
      dirtyArray.push(getOcurrence(i.name) + "x " + i.name);
    });
    return (
      message + removeDuplicates(dirtyArray).toString().replace(/,/g, ". ")
    );
  }

  const purchaseHandler = () => {
    const URL = `https://wa.me/543492383044?text=` + generateMessage();
    window.open(URL, "_blank");
  };

  return (
    <div>
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
      <div className="container-fluid d-flex justify-content-center">
        <button
          className="btn btn-success btn-confirm-order"
          onClick={() => purchaseHandler()}
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
};

export default Cart;
