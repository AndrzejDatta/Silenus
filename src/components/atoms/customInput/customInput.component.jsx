import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './customInput.styles';

const CustomInput = ({ type, placeholder, color, size, fontSize, isSearchBar }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      color={color}
      size={size}
      fontSize={fontSize}
      isSearchBar={isSearchBar}
    />
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  isSearchBar:PropTypes.bool,
};

export default CustomInput;
