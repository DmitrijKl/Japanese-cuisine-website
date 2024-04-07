import React from "react";
import styles from "./HeaderCartButton.module.css";
import { BsCartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const contextCart = useContext(CartContext);
  const cartItemsNumber = contextCart.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  useEffect(() => {
    if (contextCart.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);
    const timer = setTimeout(() => setIsButtonAnimated(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [contextCart.items]);

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <BsCartFill className={styles.icon} />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
