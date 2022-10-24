import React from "react";
import PropTypes from "prop-types";
import Title from "components/atoms/Title/Title";
import Subtitle from "components/atoms/Subtitle/Subtitle";
import { StyledStartPageText } from "components/molecules/StartPageText/StartPageText.styles";

const StartPageText = ({ pageType, title, subtitle }) => {
  return (
    <StyledStartPageText>
      <Title title={title} pageType={pageType} />
      <Subtitle subtitle={subtitle} pageType={pageType} />
    </StyledStartPageText>
  );
};

StartPageText.propTypes = {
  /**type of page */
  pageType: PropTypes.string.isRequired,
};

export default StartPageText;
