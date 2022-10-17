// import React from "react";
// import PropTypes from "prop-types";
// import CustomInput from "components/atoms/customInput/customInput.component";
// import { StyledSpan, StyledToggleSwitch } from "./ToggleSwitch.styles";
// const ToggleSwitch = (props) => {
//   return (
//     <StyledToggleSwitch>
//       <CustomInput
//         type="checkbox"
//         placeholder=""
//         color="green"
//         size="tiny"
//         fontSize="14px"
//         isToogle
//       />
//       <StyledSpan />
//       <StyledSpan />
//     </StyledToggleSwitch>
//   );
// };

// ToggleSwitch.propTypes = {};

// export default ToggleSwitch;

import React, { useState } from "react";
import PropTypes from "prop-types";
import Switch from "react-js-switch";
const ToggleSwitch = (props) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
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
