import React from "react";
import PropTypes from "prop-types";
import { StyledActivityText } from "./ActivityText.styles";
const ActivityText = ({ text, isHeadline, color }) => {
  return (
    <StyledActivityText isHeadline={isHeadline} color={color}>
      {text}
    </StyledActivityText>
  );
};
ActivityText.defaultProps = {
  text: "Text",
  isHeadline: false,
  color: "black",
};
ActivityText.propTypes = {
  /**text in element */
  text: PropTypes.string.isRequired,
  /** bool which decides about font-weight and font-size */
  isHeadline: PropTypes.bool,
  /**color of font */
  color: PropTypes.string,
};

export default ActivityText;
