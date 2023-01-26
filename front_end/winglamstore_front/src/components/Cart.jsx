import React from "react";

const Cart = ({ cartItems, setCartItems, addToCartHandler }) => {
  const removeFromCartHandler = (id) => {
    if (cartItems[id].quantity === 1) {
      deleteHandler();
    } else {
      cartItems[id].quantity -= 1;
      localStorage.setItem("wingLamCart", JSON.stringify(cartItems));
      setCartItems(JSON.parse(localStorage.getItem("wingLamCart")));
    }
  };

  const deleteHandler = (id) => {
    cartItems.splice(id, 1);
    localStorage.setItem("wingLamCart", JSON.stringify(cartItems));
    setCartItems(JSON.parse(localStorage.getItem("wingLamCart")));
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

    cartItems.forEach((i) => {
      dirtyArray.push(" " + i.quantity + "x " + i.name);
    });

    return message + removeDuplicates(dirtyArray).toString();
  }

  const purchaseHandler = () => {
    const URL = `https://wa.me/543492383044?text=` + generateMessage();
    window.open(URL, "_blank");
  };

  return (
    <div className="container cart">
      {cartItems.length > 0 ? (
        cartItems.map((d, i) => (
          <div className="row cart-item" key={"cart-item-" + i}>
            <div className="col-2 cart-img">
              <img src={d.imgUrl} alt={d.name} />
            </div>
            <div className="col-5">
              <h3>{d.name}</h3>
            </div>
            <div className="col-1 cart-quantity">
              <button
                className="btn-add-sub"
                onClick={() => removeFromCartHandler(i)}
              >
                -
              </button>
              {d.quantity}
              <button
                className="btn-add-sub"
                onClick={() => addToCartHandler(d)}
              >
                +
              </button>
            </div>
            <div className="col-2 cart-price">${d.price}</div>
            <div className="col-2">
              <button
                className="cart-remove-btn"
                onClick={() => deleteHandler()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="row">No hay productos en el carrito.</div>
      )}
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
