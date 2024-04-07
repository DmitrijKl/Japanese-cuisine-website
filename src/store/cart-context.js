import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: () => {},
  addItem: (item) => {},
  removeItem: (item) => {},
});
export default CartContext;
