import React from "react";
import PropTypes from "prop-types";
import { StyledActivityText } from "./ActivityText.styles";
const ActivityText = ({ text = "text", isDetails, isHeadline }) => {
  return (
    <StyledActivityText isDetails={isDetails} isHeadline={isHeadline}>
      {text}
    </StyledActivityText>
  );
};

ActivityText.propTypes = {
  text: PropTypes.string.isRequired,
  isDetails: PropTypes.bool,
  isHeadline: PropTypes.bool,
};

export default ActivityText;
