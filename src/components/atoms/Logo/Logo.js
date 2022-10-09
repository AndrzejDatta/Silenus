import React from 'react';
import PropTypes from 'prop-types';
import { StyledLogo } from 'components/atoms/Logo/Logo.styles';

const Logo = ({ color = '#3AA688', logoSize = 'small' }) => {
  return <StyledLogo fill={color} size={logoSize} />;
};

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  logoSize: PropTypes.string.isRequired,
};

export default Logo;
