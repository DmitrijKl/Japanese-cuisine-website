import React from "react";
import styles from "./HeaderCartButton.module.css";
import { BsCartFill } from "react-icons/bs";

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <BsCartFill className={styles.icon} />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
}

export default HeaderCartButton;
