import React from "react";
import PropTypes from "prop-types";
import style from "../container/style/app.module.css";

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Translation = () => {
  return (
    <Card className={style.inwords}>
      <p className={style.title}>Amount in words</p>
      <p className={style.translated}>
        Omo!! I neva sabi O. But e be like say e go show sha
      </p>
    </Card>
  );
};

export const Result = ({ children, title }) => {
  return (
    <Card className={style.amount}>
      <p className={style.title}>{title}</p>
      {children}
    </Card>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Result.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
