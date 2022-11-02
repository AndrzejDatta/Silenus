import React from "react";
import PropTypes from "prop-types";
import { StyledDetailsText } from "./DetailsText.styles";
import Filter from "components/atoms/Filter/Filter";
import HeadlineText from "components/atoms/HeadlineText/HeadlineText";
const DetailsText = ({ headline, filterText }) => {
  return (
    <StyledDetailsText>
      <HeadlineText text={headline} />
      <Filter text={filterText} isBigFontSize />
    </StyledDetailsText>
  );
};

DetailsText.defaultProps = {
  headline: "Headline",
  filterText: "Filter",
};

DetailsText.propTypes = {
  /**text in headline */
  headline: PropTypes.string.isRequired,
  /**text in filter */
  filterText: PropTypes.string.isRequired,
};

export default DetailsText;
