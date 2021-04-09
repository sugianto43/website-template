import React from "react";
import RadioButton from "./RadioButton";
import Select from "./Select";
import "./SelectFormGroup.css";

function SelectFormGroup() {
  return (
    <div id="select-form-group">
      <RadioButton title="Once a day" checked="checked"/>
      <div>
        <Select leftText="At" title="2 AM" rightText="WIB" />
      </div>
      <RadioButton title="At Interval" />
      <div id="select-form-two">
        <Select leftText="Every" title="6" disabled="disabled" />
        <Select rightText="From" title="hours" disabled="disabled" />
        <Select rightText="WIB" title="2AM" disabled="disabled" />
      </div>
    </div>
  );
}

export default SelectFormGroup;
