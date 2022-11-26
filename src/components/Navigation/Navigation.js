import React from "react";
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.scss"

const Navigation = () => (
   <nav>
      <ul className={styles.wrapper}>
         <li className={styles.navItem}>
            <NavLink 
            className={({ isActive }) => {styles.navItemLink + (isActive ? "Active" : "")} to="/">Twiter</NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink  className={styles.navItemLink} to="/articles">Articles</NavLink>
         </li>
         <li className={styles.navItem}>
         <NavLink className={styles.navItem} className={styles.navItemLink} to="/notes">Notes</NavLink>
         </li>
      </ul>
   </nav>
)
export default Navigation