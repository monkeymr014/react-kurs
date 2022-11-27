import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button"
import styles from "./Header.module.scss"
import logoImage from "../../assets/logo.png"

const Header = () => (
   <header className={styles.wrapper}>
      <img src={logoImage} alt="logo" className={styles.image} />
      <HeaderNavigation />
      <Button secondary>New Item</Button>
   </header>
)

export default Header