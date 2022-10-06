import React from "react";
import PropTypes from "prop-types";
import { StyledStartPageHeader } from "components/organisms/StartPageHeader/StartPageHeader.styles";
import Logo from "components/atoms/Logo/Logo";
import StartPageText from "components/molecules/StartPageText/StartPageText";
const StartPageHeader = ({ startPage, size }) => {
  return (
    <StyledStartPageHeader>
      <Logo size={size} color="#3AA688" />
      <StartPageText startPage={startPage} />
    </StyledStartPageHeader>
  );
};

StartPageHeader.propTypes = {};

export default StartPageHeader;
//TODO:dynamically set value of size in logo, to upgrade
