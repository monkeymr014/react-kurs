import React from "react";
import PropTypes from "prop-types";
import styles from './ListItem.module.scss'
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({
   title,
   image,
   description,
   link,
}) => {
   const ImageTag = image ? 'img' : 'div';

   return (
      <li classtitle={styles.wrapper}>
         {image && <ImageTag src={image} classtitle={image ? styles.image : styles.imageNone} alt="title" />}
         <div>
            <Title>{title}</Title>
            <p classtitle={styles.description}> {description}</p>
            {link && <Button href={link}>link</Button>}
         </div>
      </li>
   )
};

ListItem.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.string,
   description: PropTypes.string.isRequired,
   link: PropTypes.string,
};

ListItem.defaultProps = {
   image: null,
   link: null,
}
export default ListItem;