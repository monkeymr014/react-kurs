import React from "react";
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.scss"


const classNameFunc = ({ isActive }) => (!isActive ? styles.navItemLink : styles.navItemLinkActive);


const Navigation = () => (
   <nav>
      <ul className={styles.wrapper}>
         <li className={styles.navItem}>
            <NavLink
               className={classNameFunc}
               to="/s">
               Twiter
            </NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink
               className={classNameFunc}
               to="/articles">
               Articles
            </NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink
               className={classNameFunc}

               to="/notes">Notes</NavLink>
         </li>
      </ul>
   </nav>
)
export default Navigation