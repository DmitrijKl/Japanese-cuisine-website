import React from "react";
import styles from "./PromoText.module.css";

function PromoText() {
  return (
    <section className={styles["promo-text"]}>
      <h2>Онлайн Суши Ресторан Япона Кухня </h2>
      <p>
        Японская культура пищи включает разнообразные блюда, которые подают
        малыми порциями и употребляют сразу же. При знакомстве с японской кухней
        русского человека наверняка удивит размер порции: мы привыкли садиться
        за стол и вдоволь наедаться, а японцы воспринимают пищу иначе.
      </p>
    </section>
  );
}

export default PromoText;
