import React from "react";
import PropTypes from "prop-types";
import { StyledHeadlineText } from "./HeadlineText.styles";
const HeadlineText = ({ text, isHeadlineTextOnBackground }) => {
  return (
    <StyledHeadlineText isHeadlineTextOnBackground={isHeadlineTextOnBackground}>
      {text}
    </StyledHeadlineText>
  );
};

HeadlineText.defaultProps = {
  text: "Headline",
  isHeadlineTextOnBackground: false,
};
HeadlineText.propTypes = {
  /** text of headline */
  text: PropTypes.string.isRequired,
  /** bool which decides about color (white (if inBackground) or green) */
  isHeadlineTextOnBackground: PropTypes.bool,
};

export default HeadlineText;
