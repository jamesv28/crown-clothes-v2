import { createContext, useState } from "react";

const addToCart = (cartItems, productToAdd) => {
  // find if cartitems have product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found incement the quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productsToAdd) => {
    setCartItems(addToCart(cartItems, productsToAdd));
  };
  const value = { isCartOpen, setIsCartOpen, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
