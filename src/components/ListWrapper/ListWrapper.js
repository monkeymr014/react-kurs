import React from "react";
import ListItem from "./ListItem/ListItem";
import './ListWrapper.css';

const ListWrpapper = (props) => (
   <ul className="listWrapper__wrapper">
      {
         props.items.map(item => (
            <ListItem key={item.name} {...item} />
         ))
      }
   </ul>
);
export default ListWrpapper;