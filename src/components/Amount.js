import React from "react";
import PropTypes from "prop-types";

const Amount = ({ className, onChange, placeholder, type, ...props }) => {
  const [amount, setAmount] = React.useState("");

  return (
    <input
      name="amount"
      className={`form-control controls ${className}`}
      type={type}
      value={amount}
      placeholder={placeholder}
      onChange={(e) => setAmount(e.target.value)}
      {...props}
    />
  );
};

Amount.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Amount;
