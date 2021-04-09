import React from "react";
import PropsType from "prop-types";
import "./Select.css";

function Select({ leftText, rightText, title, disabled }) {
  return (
    <div id="custom-select">
      <span>{leftText}</span>
      <select disabled={disabled}>
        <option value={title}>{title}</option>
        <option value="#">Data</option>
        <option value="#">Data</option>
        <option value="#">Data</option>
        <option value="#">Data</option>
        <option value="#">Data</option>
      </select>
      <span>{rightText}</span>
    </div>
  );
}

Select.defaultProps = {
  title: "title",
  leftText: "",
  rightText: "",
  disabled: "",
};

Select.PropsType = {
  title: PropsType.string,
  leftText: PropsType.string,
  rightText: PropsType.string,
  disabled: PropsType.string,
};

export default Select;
