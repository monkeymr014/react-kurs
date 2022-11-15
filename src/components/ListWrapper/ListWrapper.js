import React from "react";
import ListItem from "./ListItem/ListItem";
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twittweAccounts';

const ListWrpapper = () => (
   <ul className="listWrapper__wrapper">
      {twitterAccounts.map(item => (<ListItem name={item.name}
         description={item.description}
         twitterLink={item.twitterLink} />))}
   </ul>
);
export default ListWrpapper;

