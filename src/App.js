import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";
import { useState } from "react";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </CartContextProvider>
  );
}

export default App;
