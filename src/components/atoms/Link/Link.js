import React from "react";
import PropTypes from "prop-types";
import { StyledLinkElement, StyledIcon } from "./Link.styles";
const Link = ({
  icon,
  size,
  color,
  click,
  path,
  isSearchBar,
  isRight,
  location,
}) => {
  console.log(path);
  return (
    <StyledLinkElement to={path}>
      <StyledIcon
        src={icon}
        size={size}
        color={color}
        onClick={click}
        isSearchBar={isSearchBar}
        isRight={isRight}
        location={location}
      />
    </StyledLinkElement>
  );
};

Link.propTypes = {
  /**size of text inSubtitle atom*/
  size: PropTypes.string.isRequired,
  /**color of Subtitle atom*/
  color: PropTypes.string.isRequired,
  /** icon svg injection*/
  icon: PropTypes.string.isRequired,

  isSearchBar: PropTypes.bool,
};

export default Link;
