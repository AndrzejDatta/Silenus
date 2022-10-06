import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "hooks/useWindowDimensions";
import { size } from "helpers/breakpoints";
import { StyledStartTemplate } from "./StartTemplate.styles";
import StartPageHeader from "components/organisms/StartPageHeader/StartPageHeader";
const StartTemplate = () => {
  const { width } = useWindowDimensions();

  let elementSize;
  if (width < size.mobileS) {
    elementSize = "small";
  } else if (width < size.tablet) {
    elementSize = "medium";
  } else if (width >= size.laptop) {
    elementSize = "medium";
  }
  return (
    <StyledStartTemplate>
      <StartPageHeader size={elementSize} startPage="startPage" />
    </StyledStartTemplate>
  );
};

StartTemplate.propTypes = {};

export default StartTemplate;
