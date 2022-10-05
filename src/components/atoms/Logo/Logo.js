import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as logo } from "assets/icons/logo.svg";
import styled from "styled-components";

const StyledLogo = styled(logo)`
  ${(props) => {
    if (props.size === "small") {
      return `
            width:150px;
            height:150px;
            `;
    } else if (props.size === "medium") {
      return `
            width:200px;
            height:200px;
            `;
    } else if (props.size === "large") {
      return `
            width:250px;
            height:250px;
            `;
    }
  }}
`;
const Logo = ({ color = "black", size = "small" }) => {
  return <StyledLogo fill={color} size={size} />;
};

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Logo;
