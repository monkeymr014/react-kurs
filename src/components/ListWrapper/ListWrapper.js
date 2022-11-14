import React from "react";
import ListItem from "./ListItem/ListItem";
import './ListWrapper.css';
import {twitterAccounts} from '../../data/twittweAccounts';

const ListWrpapper = () => (
   <ul className="listWrapper__wrapper">
      <ListItem name={twitterAccounts[0].name} 
      description={twitterAccounts[0].description}
      twitterLink={twitterAccounts[0].twitterLink}/>
   </ul>
);
export default ListWrpapper;

