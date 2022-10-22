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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-js-switch';
import { theme } from 'assets/styles/theme';
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
      backgroundColor={{
        on: theme.color.backgroundGreen,
        off: 'grey',
      }}
      borderColor={{ on: 'none', off: 'none' }}
    />
  );
};

ToggleSwitch.propTypes = {};

export default ToggleSwitch;

// https://www.npmjs.com/package/react-js-switch
