import React from "react";
import PropTypes from "prop-types";
import styles from './ListItem.module.scss'
import Button from "../../Button/Button";
import Title from "../../Title/Title";

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
            <Title>{name}</Title>
            <p className={styles.descrition}> {description}</p>
            <Button href={twitterLink}>twitterLink</Button>
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