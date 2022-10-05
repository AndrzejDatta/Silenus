import React from "react";
import PropTypes from "prop-types";
import { StyledSubtitle } from "components/atoms/Subtitle/Subtitle.styles";
const Subtitle = ({ subtitle, color, size }) => {
  return (
    <StyledSubtitle color={color} size={size}>
      {subtitle}
    </StyledSubtitle>
  );
};
Subtitle.propTypes = {
  /**text in Subtitle atom*/
  subtitle: PropTypes.string.isRequired,
  /**size of text inSubtitle atom*/
  size: PropTypes.string.isRequired,
  /**color of Subtitle atom*/
  color: PropTypes.string.isRequired,
};

export default Subtitle;
