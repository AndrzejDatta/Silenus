import React from "react";
import PropTypes from "prop-types";
import Title from "components/atoms/Title/Title";
import Subtitle from "components/atoms/Subtitle/Subtitle";
import { StyledStartPageText } from "components/molecules/StartPageText/StartPageText.styles";

const StartPageText = ({ pageType }) => {
  return (
    <StyledStartPageText>
      <Title title="Silenus" pageType={pageType} />
      <Subtitle subtitle="smart pots" pageType={pageType} />
    </StyledStartPageText>
  );
};

StartPageText.propTypes = {
  /**type of page */
  pageType: PropTypes.string.isRequired,
};

export default StartPageText;
