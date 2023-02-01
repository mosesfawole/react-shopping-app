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

  function addToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }

    function deleteCart(id) {
      setCartProducts((cartProducts) =>
        cartProducts.filter((currentProduct) => {
          return currentProduct.id != id;
        })
      );
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
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    );
  }
}
