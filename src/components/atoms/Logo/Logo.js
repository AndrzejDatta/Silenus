import React from "react";
import PropTypes from "prop-types";
import { StyledLogo } from "components/atoms/Logo/Logo.styles";

const Logo = ({ color, logoSize }) => {
  return <StyledLogo fill={color} logoSize={logoSize} />;
};

Logo.defaultProps = {
  color: "#3AA688",
  logoSize: "small",
};
Logo.propTypes = {
  /** color of logo */
  color: PropTypes.string.isRequired,
  /** size of logo */
  logoSize: PropTypes.string.isRequired,
};

export default Logo;
