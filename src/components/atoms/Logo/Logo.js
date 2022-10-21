import React from "react";
import PropTypes from "prop-types";
import { StyledLogo } from "components/atoms/Logo/Logo.styles";

const Logo = ({ color = "#3AA688", logoSize = "small" }) => {
  return <StyledLogo fill={color} logoSize={logoSize} />;
};

Logo.propTypes = {
  /** color of logo */
  color: PropTypes.string.isRequired,
  /** size of logo */
  logoSize: PropTypes.string.isRequired,
};

export default Logo;
