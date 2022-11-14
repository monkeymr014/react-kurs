import React from "react";
import './ListItem.css'
import img from '../../../assets/image/logo.png'

const ListItem = () =>
(
   <li className="listItem__wrapper">
      <img src={img} className="listItem__image" />
      <div>
         <h2 className="listItem__name" >name</h2>
         <p className="listItem__descrition"> asdl;ka snd laskdn lasknd lksn dlaksdn</p>
         <button className="listItem__button">fb</button>
      </div>
   </li>
);

export default ListItem;