import React from "react";
import PropTypes from "prop-types";
import { StyledActivityText } from "./ActivityText.styles";
const ActivityText = ({ text = "text", isHeadline, color }) => {
  return (
    <StyledActivityText isHeadline={isHeadline} color={color}>
      {text}
    </StyledActivityText>
  );
};

ActivityText.propTypes = {
  text: PropTypes.string.isRequired,
  isHeadline: PropTypes.bool,
};

export default ActivityText;
