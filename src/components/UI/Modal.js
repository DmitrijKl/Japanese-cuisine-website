import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={styles.backdrop}></div>;
};
const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </>
  );
}

export default Modal;
