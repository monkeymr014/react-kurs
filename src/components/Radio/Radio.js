import React from "react";
import styles from "./Radio.module.scss"


const Radio = ({id, checked,  changeFn, children}) => (
   <div className={styles.wrapper}>
      <label>{children}</label>
      <input
         id={id}
         type="radio"
         checked={checked}
         onChange={changeFn}
         />
   </div>
)
export default Radio