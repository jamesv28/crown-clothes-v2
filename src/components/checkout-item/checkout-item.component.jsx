import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContaienr,
  ImageContainer,
  CheckoutSpans,
  RemoveButton,
  QuantityBox,
  ArrowBlocks,
  ValueBox,
} from "./checkout-item.styles";
const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItem = () => {
    clearItemFromCart(cartItem);
  };
  const addQuantity = () => {
    addItemToCart(cartItem);
  };

  const reduceQuantity = () => {
    removeItemFromCart(cartItem);
  };
  return (
    <CheckoutItemContaienr>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutSpans>{name}</CheckoutSpans>
      <QuantityBox>
        <ArrowBlocks onClick={reduceQuantity}>&#10094;</ArrowBlocks>
        <ValueBox>{quantity}</ValueBox>
        <ArrowBlocks onClick={addQuantity}>&#10095;</ArrowBlocks>
      </QuantityBox>
      <CheckoutSpans>{price}</CheckoutSpans>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContaienr>
  );
};

export default CheckoutItem;
