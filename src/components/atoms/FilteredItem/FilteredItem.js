import React from "react";
import PropTypes from "prop-types";
import {
  StyledFilteredItem,
  StyledFilteredItemSection,
} from "./FilteredItem.styles";
const FilteredItem = ({ filteredText }) => {
  return (
    <StyledFilteredItemSection>
      <StyledFilteredItem>{filteredText}</StyledFilteredItem>
    </StyledFilteredItemSection>
  );
};

FilteredItem.defaultProps = {
  filteredText: "FilteredText",
};

FilteredItem.propTypes = {
  filteredText: PropTypes.string.isRequired,
};

export default FilteredItem;
