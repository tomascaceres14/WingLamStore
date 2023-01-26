import React from "react";
import { Link } from "react-router-dom";

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
          <div>
            <div className="row cart-item" key={"cart-item-" + i}>
              <div className="col-2 cart-img">
                <img src={d.imgUrl} alt={d.name} />
              </div>
              <div className="col-5">
                <h3>{d.name}</h3>
              </div>
              <div className="col-1 cart-quantity">
                <button
                  className="cart-quantity-btn"
                  onClick={() => removeFromCartHandler(i)}
                >
                  -
                </button>
                {d.quantity}
                <button
                  className="cart-quantity-btn"
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
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="row cart-item">No hay productos en el carrito.</div>
      )}
      <div className="container-fluid d-flex justify-content-center">
        {cartItems.length > 0 ? (
          <button
            className="btn btn-success btn-confirm-order"
            onClick={() => purchaseHandler()}
          >
            Confirmar pedido
          </button>
        ) : (
          <Link to="/productos" className="btn btn-primary">
            Continuar comprando
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
