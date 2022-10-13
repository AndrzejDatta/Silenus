import React from "react";
import PropTypes from "prop-types";
import { StyledActivityText } from "./ActivityText.styles";
const ActivityText = ({ text, isDetails, isHeadline }) => {
  return (
    <ActivityText isDetails={isDetails} isHeadline={isHeadline}>
      {text}
    </ActivityText>
  );
};

ActivityText.propTypes = {};

export default ActivityText;
