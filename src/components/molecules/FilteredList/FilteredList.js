import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilteredItem from "components/atoms/FilteredItem/FilteredItem";
import { StyledFilteredList } from "./FilteredList.styles";
import axios from "axios";
const FilteredList = ({ query }) => {
  const [plantsData, setPlantsData] = useState([]);
  useEffect(() => {
    axios
      .get("/plants")
      .then((data) => setPlantsData(data.data))
      .then((data) => console.log(data.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(query);
  const searchElementsByCommon = plantsData.plants?.map(({ common }, index) => {
    if (common.toLowerCase().includes(query.toLowerCase())) {
      return <FilteredItem filteredText={common} key={index} />;
    }
  });

  return <StyledFilteredList>{searchElementsByCommon}</StyledFilteredList>;
};

FilteredList.defaultProps = {
  query: "",
};

FilteredList.propTypes = {
  query: PropTypes.string,
};

export default FilteredList;
