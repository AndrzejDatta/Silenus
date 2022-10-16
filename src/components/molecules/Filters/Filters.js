import React, { useContext } from "react";
import { dataContext } from "providers/DataProvider";
import PropTypes from "prop-types";
import Filter from "components/atoms/Filter/Filter";
import { StyledFilters } from "./Filters.styles";
const Filters = ({ icons, isBig = true, isDashboard = true }) => {
  const {
    Dashboard: { filters },
  } = useContext(dataContext);

  const filterElements = filters?.map(({ name }) => {
    return <Filter text={name} isBig={isBig} isDashboard={isDashboard} />;
  });
  return <StyledFilters>{filterElements}</StyledFilters>;
};

Filters.propTypes = {
  // filters: PropTypes.array, docelowo bede przesyłać to
  icons: PropTypes.array,
  /**Size of text */
  isBig: PropTypes.bool,
  /**Color of text */
  isDashboard: PropTypes.bool,
};

export default Filters;
