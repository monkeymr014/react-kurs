import React from "react";
import { NavLink } from "react-router-dom"
import styles from "./HeaderNavigation.module.scss"


const classNameFunc = ({ isActive }) => (!isActive ? styles.navItemLink : styles.navItemLinkActive);


const HeaderNavigation = () => (
   <nav>
      <ul className={styles.wrapper}>
         <li className={styles.navItem}>
            <NavLink
               className={classNameFunc}
               to="/">
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
export default HeaderNavigation