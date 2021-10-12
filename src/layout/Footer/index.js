import React from "react";

const Footer = ({ className, ...props }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`root-footer ${className}`} {...props}>
      <p>
        Created by{" "}
        <a href="https://calebolojo.me/" target="__blank">
          aoa
        </a>{" "}
        &copy; {year}
      </p>
    </footer>
  );
};

export default Footer;
