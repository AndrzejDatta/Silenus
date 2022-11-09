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

NoAccount.defaultProps = {
  text: 'Text',
  buttonText:'Button Text',
  fontSize: '14px',
  color:'black'
};


NoAccount.propTypes =  {
  /**info text aboute account status */
  text: PropTypes.string.isRequired,
  /**link text to navigate to page (sign in) */
  buttonText: PropTypes.string.isRequired,
  /** font-size of text */
  fontSize: PropTypes.string.isRequired,
  /**color of item */
  color: PropTypes.string.isRequired,
};


export default NoAccount;
