import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header title="Moni for different languages" />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
