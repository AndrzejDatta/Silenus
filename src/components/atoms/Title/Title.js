import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "components/atoms/Title/Title.styles";
const Title = ({ title, color, size }) => {
  return (
    <StyledTitle color={color} size={size}>
      {title}
    </StyledTitle>
  );
};

Title.propTypes = {
  /**text in Title atom*/
  title: PropTypes.string.isRequired,
  /**size of text in Title atom*/
  size: PropTypes.string.isRequired,
  /**color of Title atom*/
  color: PropTypes.string.isRequired,
};

export default Title;
