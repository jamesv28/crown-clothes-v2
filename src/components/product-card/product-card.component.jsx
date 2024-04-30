import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { id, name, imageUrl, price } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
