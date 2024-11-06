// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// create the context
export const CartContext = createContext();

// create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add product-items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove product-items from the cart
  const removeFromCart = (productId) => {
    setCartItems(
      (prevItems) => {
        const index = prevItems.findIndex((item) => item.id === productId);
        if (index !== -1) {
          const updatedItems = [...prevItems];
          updatedItems.splice(index, 1);
          return updatedItems;
        }
        return prevItems;
      }
      // prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to clear product-items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Added PropTypes for validation
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
