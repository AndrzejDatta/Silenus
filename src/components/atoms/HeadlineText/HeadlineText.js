import React from "react";
import PropTypes from "prop-types";
import { StyledHeadlineText } from "./HeadlineText.styles";
const HeadlineText = ({ text = "Headline", isBackground }) => {
  return (
    <StyledHeadlineText isBackground={isBackground}>{text}</StyledHeadlineText>
  );
};

HeadlineText.propTypes = {
  /** text of headline */
  text: PropTypes.string.isRequired,
  /** bool which decides about color (white (if inBackground) or green) */
  isBackground: PropTypes.bool,
};

export default HeadlineText;
