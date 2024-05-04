import "./cart-item.styles.scss";
import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName className="name">{name}</ItemName>
        <ItemName>
          {quantity} x ${price}
        </ItemName>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
