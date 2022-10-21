import React, { useState } from "react";
import Switch from "react-js-switch";
const ToggleSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <Switch
      value={isSwitchOn}
      onChange={switch_onChange_handle}
      backgroundColor="black"
    />
  );
};

ToggleSwitch.propTypes = {};

export default ToggleSwitch;

// https://www.npmjs.com/package/react-js-switch
