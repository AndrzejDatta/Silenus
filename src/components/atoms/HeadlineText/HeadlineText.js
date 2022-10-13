import React from "react";
import PropTypes from "prop-types";
import { StyledHeadlineText } from "./HeadlineText.styles";
const HeadlineText = ({ text = "Healine" }) => {
  return <StyledHeadlineText>{text}</StyledHeadlineText>;
};

HeadlineText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadlineText;
