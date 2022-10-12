import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "hooks/useWindowDimensions";
import { size } from "helpers/breakpoints";
import { StyledStartTemplate } from "./StartTemplate.styles";
import StartPageHeader from "components/organisms/StartPageHeader/StartPageHeader";
const StartTemplate = ({ children, pageType, logoColor, logoSize }) => {
  const { width } = useWindowDimensions();

  return (
    <StyledStartTemplate pageType={pageType}>
      <StartPageHeader
        logoSize={logoSize}
        pageType={pageType}
        logoColor={logoColor}
      />
      {children}
    </StyledStartTemplate>
  );
};

StartTemplate.propTypes = {};

export default StartTemplate;
