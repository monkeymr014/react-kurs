import React from "react";
import './ListItem.css'

const ListItem = ({
   name,
   image,
   description,
   twitterLink
}) =>
(
   <li className="listItem__wrapper">
      <img src={image} className="listItem__image" alt="name" />
      <div>
         <h2 className="listItem__name" >{name}</h2>
         <p className="listItem__descrition"> description}</p>
         <button className="listItem__button">{twitterLink}</button>
      </div>
   </li>
);

export default ListItem;