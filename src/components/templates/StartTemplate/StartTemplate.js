import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import useWindowDimensions from "hooks/useWindowDimensions";
import { size } from "helpers/breakpoints";
import { StyledStartTemplate } from "./StartTemplate.styles";
import StartPageHeader from "components/organisms/StartPageHeader/StartPageHeader";
const StartTemplate = ({ children, pageType, logoColor, logoSize }) => {
  const { width } = useWindowDimensions();

  const {
    StartPage: { title, subtitle },
    NotFoundPage: { headline, textInfo },
  } = useContext(dataContext);

  return (
    <StyledStartTemplate pageType={pageType}>
      <StartPageHeader
        logoSize={logoSize}
        pageType={pageType}
        logoColor={logoColor}
        title={pageType === "notFoundPage" ? headline : title}
        subtitle={pageType === "notFoundPage" ? textInfo : subtitle}
      />
      {children}
    </StyledStartTemplate>
  );
};

StartTemplate.propTypes = {};

export default StartTemplate;
