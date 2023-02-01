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

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
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
