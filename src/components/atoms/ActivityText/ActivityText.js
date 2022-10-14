import React from "react";
import PropTypes from "prop-types";
import { StyledActivityText } from "./ActivityText.styles";
const ActivityText = ({ text, isDetails, isHeadline }) => {
  return (
    <StyledActivityText isDetails={isDetails} isHeadline={isHeadline}>
      {text}
    </StyledActivityText>
  );
};

ActivityText.propTypes = {};

export default ActivityText;
