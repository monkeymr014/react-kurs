import React from "react";
import styles from './Input.module.scss'
import PropTypes from "prop-types";

const Input = ({ tag: Tag, name, label, maxLength }) => (
   <div className={styles.item}>
      <Tag
         className={Tag === 'texarea' ? styles.textarea : styles.input}
         type="text"
         name={name}
         id={name}
         maxLength={maxLength}
         required
         placeholder=' '
      />
      <label htmlFor={name}>{label}</label>
      <div className={styles.bar}></div>
   </div>
)

Input.propTypes = {
   tag: PropTypes.string,
   name: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   maxLength: PropTypes.number,
}

Input.defaultProps = {
   tag: 'input',
   maxLength: 200,
}

export default Input;