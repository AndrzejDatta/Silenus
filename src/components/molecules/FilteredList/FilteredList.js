import React, { useContext } from "react";
import PropTypes from "prop-types";
import FilteredItem from "components/atoms/FilteredItem/FilteredItem";
import { StyledFilteredList } from "./FilteredList.styles";
import { dataContext } from "providers/DataProvider";
const FilteredList = ({ query }) => {
  const {
    plantsData: { plants },
  } = useContext(dataContext);

  console.log(query);
  const searchElementsByCoomon = plants?.map(({ common }) => {
    if (common.toLowerCase().includes(query.toLowerCase())) {
      return <FilteredItem filteredText={common} />;
    }
  });

  return <StyledFilteredList>{searchElementsByCoomon}</StyledFilteredList>;
};

FilteredList.defaultProps = {
  query: "query",
};

FilteredList.propTypes = {
  query: PropTypes.string,
};

export default FilteredList;
