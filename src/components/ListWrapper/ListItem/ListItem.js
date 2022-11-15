import React from "react";
import PropTypes  from "prop-types";
import styles from  './ListItem.module.scss'

const ListItem = ({
   name,
   image,
   description,
   twitterLink,
}) =>
(
   <li className={styles.wrapper}>
      <img src={image} className={styles.image} alt="name" />
      <div>
         <h2 className={styles.name} >{name}</h2>
         <p className={styles.descrition}> {description}</p>
         <a href="{twitterLink}" target="_blank" className={styles.button}>twitterLink</a>
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