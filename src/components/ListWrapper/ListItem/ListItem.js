import React from "react";
import  PropTypes  from "prop-types";
import './ListItem.css'

const ListItem = ({
   name,
   image,
   description,
   twitterLink,
}) =>
(
   <li className="listItem__wrapper">
      <img src={image} className="listItem__image" alt="name" />
      <div>
         <h2 className="listItem__name" >{name}</h2>
         <p className="listItem__descrition"> {description}</p>
         <a href="{twitterLink}" target="_blank" className="listItem__button">{twitterLink}</a>
      </div>
   </li>
);

ListItem.propTypes = {
   name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   description: PropTypes.string,
   twitterLink: PropTypes.string,
};

ListItem.defaultProps = {
   description: 'brak danych'
}
export default ListItem;