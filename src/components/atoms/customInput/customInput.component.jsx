import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './customInput.styles';

const CustomInput = ({ type, placeholder, color, size, fontSize, isSearchBar,  isToggleInput, typing }) => {
  
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      color={color}
      size={size}
      fontSize={fontSize}
      isSearchBar={isSearchBar}
      isToggleInput={isToggleInput}
      onChange={typing}
    />
  );
};

CustomInput.defaultProps = {
  type: 'text',
  placeholder:'text' ,
  size: 'small',
  fontSize:'14px' ,
  isSearchBar:false,
  isToggleInput:false,
  typing:()=>{},
  
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
   /** bool whoch decides about being toggle switch in UserActivity in Calendar*/
   isToggleInput:PropTypes.bool,
   /** function to search plants (onChnage event)*/
   typing:PropTypes.func,

};

export default CustomInput;
