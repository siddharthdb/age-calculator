import React from "react";

const Input = ({ label, placeholder, handleChange, errorMsg }) => {
  return (
    <div className="cmp-age-calc__Input">
      <label className={errorMsg ? "error" : ""} htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input
        type="text"
        name={label.toLowerCase()}
        placeholder={placeholder}
        id={label.toLowerCase()}
        onKeyUp={handleChange}
        className={errorMsg ? "error" : ""}
      />
      <span class="error-msg">{errorMsg}</span>
    </div>
  );
};

export default Input;
