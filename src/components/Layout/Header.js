import React from "react";
import style from "./Header.module.css";
import imgSushi from "../../assets/Суши.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <>
      <header className={style.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={style["main-image"]}>
        <img src={imgSushi} alt="Not found..."></img>
      </div>
    </>
  );
}

export default Header;