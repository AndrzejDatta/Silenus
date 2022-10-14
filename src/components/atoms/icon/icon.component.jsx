import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './icon.styles';

const Icon = ({ icon, size, color,click,isSearchBar,isRight }) => {
  return <StyledIcon src={icon} size={size} color={color} onClick={click} isSearchBar={isSearchBar} isRight={isRight}/>;
};

Icon.propTypes = {
  /**size of text inSubtitle atom*/
  size: PropTypes.string.isRequired,
  /**color of Subtitle atom*/
  color: PropTypes.string.isRequired,
  /** icon svg injection*/
  icon: PropTypes.string.isRequired,

  isSearchBar:PropTypes.bool,
};

export default Icon;
