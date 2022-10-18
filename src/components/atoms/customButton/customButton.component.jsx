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
  size: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CustomButton;
