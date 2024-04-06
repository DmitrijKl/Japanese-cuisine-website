import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  return (
    <>
      <Cart />
      <Header></Header>
      <Meals></Meals>
    </>
  );
}

export default App;
