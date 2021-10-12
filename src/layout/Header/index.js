import React from "react";
import PropTypes from "prop-types";

const Header = ({ className, title, ...props }) => {
  return (
    <header className={`head-root ${className}`} {...props}>
      {title}
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.node.isRequired,
};
