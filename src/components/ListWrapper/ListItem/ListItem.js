import React from "react";
import './ListItem.css'
import img from '../../../assets/image/logo.png'

const ListItem = (props) =>
(
   <li className="listItem__wrapper">
      <img src={img} className="listItem__image" />
      <div>
         <h2 className="listItem__name" >{props.name}</h2>
         <p className="listItem__descrition"> {props.description}</p>
         <button className="listItem__button">{props.twitterLink}</button>
      </div>
   </li>
);

export default ListItem;