import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledNoAccountButton,
  StyledNoAccountContainer,
} from './noAccount.styles';

const NoAccount = ({ text, buttonText, fontSize, color }) => {
  return (
    <StyledNoAccountContainer fontSize={fontSize} color={color}>
      {text}
      <StyledNoAccountButton fontSize={fontSize} color={color}>
        {buttonText}
      </StyledNoAccountButton>
    </StyledNoAccountContainer>
  );
};

NoAccount.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default NoAccount;
