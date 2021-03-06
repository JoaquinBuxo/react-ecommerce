import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    item.quantity += quantity;

    if (!isInCart(item.id)) {
      setCartList([...cartList, item]);
    } else {
      setCartList([...cartList]);
    }
  };

  const removeItem = (itemId) => {
    cartList.find((item) => item.id === itemId).quantity = 0;
    setCartList(cartList.filter((element) => element.id != itemId));
  };

  const clear = () => {
    cartList.map((item) => (item.quantity = 0));
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.some((element) => element.id === id);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
