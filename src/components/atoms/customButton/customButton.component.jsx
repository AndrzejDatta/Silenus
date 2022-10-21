import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './customButton.styles';

const CustomButton = ({
  size,
  text,
  fontSize,
  type,
  color,
  backgroundColor,
  click,
}) => {
  return (
    <StyledButton
      size={size}
      fontSize={fontSize}
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      onClick={click}
    >
      {text}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  /**size of button */
  size: PropTypes.string.isRequired,
    /**font-size of text  in button */
  fontSize: PropTypes.string.isRequired,
    /** text  in button */
  text: PropTypes.string.isRequired,
  /**type of button */
  type: PropTypes.string.isRequired,
    /**color of text button */
  color: PropTypes.string.isRequired,
   /**background-color of button */
  backgroundColor: PropTypes.string.isRequired,
};

export default CustomButton;
