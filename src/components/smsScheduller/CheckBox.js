import React from "react";
import "./CheckBox.css"

function CheckBox(props) {
  return (
    <>
      <label className="containers-box">{props.title}
  <input type="checkbox" checked={props.checked}/>
  <span className="checkmark"></span>
</label>
    </>
  );
}

export default CheckBox;
