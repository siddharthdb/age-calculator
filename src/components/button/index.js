import React from "react";
import arrow from "../../../assets/images/icon-arrow.svg";

const Button = ({ handleClick }) => {
  return (
    <div className="cmp-age-calc__Button" tabIndex={0} onClick={handleClick}>
      <img src={arrow} alt="Calculate age" />
    </div>
  );
};

export default Button;
