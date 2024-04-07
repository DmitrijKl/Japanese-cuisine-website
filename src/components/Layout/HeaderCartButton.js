import React from "react";
import styles from "./HeaderCartButton.module.css";
import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const contextCart = useContext(CartContext);

  const cartItemsNumber = contextCart.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <BsCartFill className={styles.icon} />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
