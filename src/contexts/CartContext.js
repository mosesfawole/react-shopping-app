import { createContext, useState } from "react";
import { productsArray } from "../productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    deleteCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
