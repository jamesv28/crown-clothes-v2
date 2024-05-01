import React from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout page</h1>
      {cartItems.map((item) => {
        const { name, quantity, id } = item;

        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeItemFromCart(item)}>decrement</button>
            <span>{quantity}</span>
            <button onClick={() => addItemToCart(item)}>increment</button>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
