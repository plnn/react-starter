import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

export const CardHeader = (props) => {
  const { title, info } = props;
  return (
    <div className={styles.cardHeader}>
      <p>{title}</p>
      <span>{info}</span>
    </div>
  );
};

const Card = (props) => {
  const { key, children } = props;
  return (
    <div key={key} className={styles.cardContainer}>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

CardHeader.defaultProps = {
  title: "",
  info: "",
};

CardHeader.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

Card.defaultProps = {
  key: "",
  children: null,
};

Card.propTypes = {
  key: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]),
};
export default Card;
