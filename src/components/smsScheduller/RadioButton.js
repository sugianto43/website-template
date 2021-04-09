import React from "react";
import "./RadioButton.css"

function RadioButton(props) {
  return (
    <div>
      <label className="container-radio-btn">
        {props.title}
        <input type="radio" name="radio" checked={props.checked}/>
        <span className="checkmark-radio"></span>
      </label>
    </div>
  );
}

export default RadioButton;
