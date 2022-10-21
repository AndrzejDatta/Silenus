import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './customInput.styles';

const CustomInput = ({ type, placeholder, color, size, fontSize, isSearchBar,  isToogle }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      color={color}
      size={size}
      fontSize={fontSize}
      isSearchBar={isSearchBar}
      isToogle={isToogle}
    />
  );
};

CustomInput.propTypes = {
  /** type of input*/
  type: PropTypes.string.isRequired,
   /** placeholder in input*/
  placeholder: PropTypes.string.isRequired,
   /** size of  input*/
  size: PropTypes.string.isRequired,
   /** fontsize of  text in input*/
  fontSize: PropTypes.string.isRequired,
   /** bool whoch decides about being icon in input*/
  isSearchBar:PropTypes.bool,
};

export default CustomInput;
