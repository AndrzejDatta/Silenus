import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "hooks/useWindowDimensions";
import { size } from "helpers/breakpoints";
import { StyledStartTemplate } from "./StartTemplate.styles";
import StartPageHeader from "components/organisms/StartPageHeader/StartPageHeader";
const StartTemplate = ({ children, pageType, logoColor }) => {
  const { width } = useWindowDimensions();

  let elementSize;
  if (width <= size.mobileS && pageType === "loginPage") {
    console.log("tiny");
    elementSize = "tiny";
  } else if (width < size.mobileS) {
    console.log("small");
    elementSize = "small";
  } else if (width < size.tablet) {
    elementSize = "medium";
  } else if (width >= size.laptop) {
    elementSize = "medium";
  }
  return (
    <StyledStartTemplate pageType={pageType}>
      <StartPageHeader
        logoSize={elementSize}
        pageType={pageType}
        logoColor={logoColor}
      />
      {children}
    </StyledStartTemplate>
  );
};

StartTemplate.propTypes = {};

export default StartTemplate;
