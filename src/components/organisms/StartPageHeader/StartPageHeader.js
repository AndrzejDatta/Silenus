import React from 'react';
import PropTypes from 'prop-types';
import { StyledStartPageHeader } from 'components/organisms/StartPageHeader/StartPageHeader.styles';
import Logo from 'components/atoms/Logo/Logo';
import StartPageText from 'components/molecules/StartPageText/StartPageText';
const StartPageHeader = ({ logoSize, logoColor }) => {
  return (
    <StyledStartPageHeader>
      <Logo logoSize={logoSize} color={logoColor} />
      <StartPageText pageType={'loginPage'} />
    </StyledStartPageHeader>
  );
};

StartPageHeader.propTypes = {};

export default StartPageHeader;
//TODO:dynamically set value of size in logo, to upgrade