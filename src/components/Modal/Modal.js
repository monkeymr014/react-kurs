import React from "react";
import styles from "./Modal.module.scss"
import Form from "../Form/Forms"

const Modal = ({closeModalFn}) => (
   <div className={styles.wrapper}>
      <button onClick={closeModalFn}>clo</button>
      <Form/>
   </div>
)
export default Modal