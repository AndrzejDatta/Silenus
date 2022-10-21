import React from "react";
import PropTypes from "prop-types";
import { StyledLinkElement, StyledIcon } from "./Link.styles";
const Link = ({ icon, size, color, click, path, isDetailsPage }) => {
  return (
    <StyledLinkElement to={path}>
      <StyledIcon
        src={icon}
        size={size}
        color={color}
        onClick={click}
        isDetailsPage={isDetailsPage}
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
  /** click is a function */
  click: PropTypes.func,
  /** path url to page */
  path: PropTypes.string.isRequired,
  /** setting of return arrow  */
  isDetailsPage: PropTypes.bool,
};

export default Link;
