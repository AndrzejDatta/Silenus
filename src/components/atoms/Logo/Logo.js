import React from "react";
import PropTypes from "prop-types";
import { StyledLogo } from "components/atoms/Logo/Logo.styles";

const Logo = ({ color = "black", size = "small" }) => {
  return <StyledLogo fill={color} size={size} />;
};

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Logo;
