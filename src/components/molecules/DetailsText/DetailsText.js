import React from "react";
import PropTypes from "prop-types";
import { StyledDetailsText } from "./DetailsText.styles";
import Filter from "components/atoms/Filter/Filter";
import HeadlineText from "components/atoms/HeadlineText/HeadlineText";
const DetailsText = ([headline, filterText]) => {
  return (
    <StyledDetailsText>
      <HeadlineText text={headline} />
      <Filter text={filterText} isBig />
    </StyledDetailsText>
  );
};

DetailsText.propTypes = {};

export default DetailsText;
