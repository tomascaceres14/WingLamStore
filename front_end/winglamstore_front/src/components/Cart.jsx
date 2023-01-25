import React, { useState } from "react";

const Cart = ({ cart }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("wingLamCart"))
  );

  const subQuantity = (i) => {
    if (items[i].quantity === 1) {
      deleteHandler(i);
    } else items[i].quantity -= 1;
    localStorage.setItem("wingLamCart", JSON.stringify(items));
    setItems(JSON.parse(localStorage.getItem("wingLamCart")));
  };

  const addQuantity = (i) => {
    items[i].quantity += 1;
    localStorage.setItem("wingLamCart", JSON.stringify(items));
    setItems(JSON.parse(localStorage.getItem("wingLamCart")));
  };

  const deleteHandler = (id) => {
    items.splice(id, 1);
    localStorage.setItem("wingLamCart", JSON.stringify(items));
    setItems(JSON.parse(localStorage.getItem("wingLamCart")));
    cart();
  };

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
    let message = "Hola! estos son los productos que deseo adquirir:\n";
    let dirtyArray = [];

    items.forEach((i) => {
      dirtyArray.push(" " + i.quantity + "x " + i.name);
    });

    return message + removeDuplicates(dirtyArray).toString();
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
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items
            ? items.map((d, i) => (
                <tr key={"cart-item-" + i}>
                  <td>{d.name}</td>
                  <td>${d.price}</td>
                  <td className="d-flex td-quantity">
                    <button
                      className="btn btn-warning btn-add-sub"
                      onClick={() => subQuantity(i)}
                    >
                      -
                    </button>
                    {d.quantity}
                    <button
                      className="btn btn-warning btn-add-sub"
                      onClick={() => addQuantity(i)}
                    >
                      +
                    </button>
                  </td>
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
