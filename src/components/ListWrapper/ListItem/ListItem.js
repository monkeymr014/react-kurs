import React from "react";
import PropTypes from "prop-types";
import styles from './ListItem.module.scss'

const ListItem = ({
   name,
   image,
   description,
   twitterLink,
} ) => {
   const ImageTag = image ? 'img' : 'div';

   return (

      <li className={styles.wrapper}>
         <ImageTag src={image} className={image ? styles.image : styles.imageNone } alt="name" />
         <div>
            <h2 className={styles.name} >{name}</h2>
            <p className={styles.descrition}> {description}</p>
            <a href="{twitterLink}" target="_blank" className={styles.button}>twitterLink</a>
         </div>
      </li>
   )
};

ListItem.propTypes = {
   name: PropTypes.string.isRequired,
   image: PropTypes.string,
   description: PropTypes.string,
   twitterLink: PropTypes.string,
};

ListItem.defaultProps = {
   image: null,
   description: 'brak danych'
}
export default ListItem;