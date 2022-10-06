import React from "react";
import PropTypes from "prop-types";
import Title from "components/atoms/Title/Title";
import Subtitle from "components/atoms/Subtitle/Subtitle";
import { StyledStartPageText } from "components/molecules/StartPageText/StartPageText.styles";

const StartPageText = ({ startPage }) => {
  return (
    <StyledStartPageText>
      <Title title="Title" color={startPage} size={startPage} />
      <Subtitle subtitle="Title" color={startPage} size={startPage} />
    </StyledStartPageText>
  );
};

StartPageText.propTypes = {
  startPage: PropTypes.string.isRequired,
};

export default StartPageText;
