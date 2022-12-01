import React from "react";
import ListItem from "./ListItem";
import styles from './List.module.scss';

const ListWrpapper = ({ items }) => (
   <>
      {items.length ? (

         <ul className={styles.wrapper}>
            {
               items.map(item => (
                  <ListItem key={item.name} {...item} />
               ))
            }
         </ul>
      ) : (
         <h1>dodaj</h1>
      )}
   </>
);
export default ListWrpapper;