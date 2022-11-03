import React, { useContext } from "react";
import { dataContext } from "providers/DataProvider";
import PropTypes from "prop-types";
import Filter from "components/atoms/Filter/Filter";
import { StyledFilters } from "./Filters.styles";
import Icon from "components/atoms/icon/icon.component";
const Filters = ({ icons, isBigFontSize, color }) => {
  const {
    Dashboard: { filters },
  } = useContext(dataContext);

  const filterElements = filters?.map(({ name }, index) => {
    return (
      <Filter
        key={index}
        text={name}
        isBigFontSize={isBigFontSize}
        color={color}
      />
    );
  });
  return <StyledFilters>{filterElements}</StyledFilters>;
};

Filters.defaultProps = {
  icons: [],
  isBigFontSize: false,
  color: "black",
};

Filters.propTypes = {
  // filters: PropTypes.array, docelowo bede przesyłać to
  icons: PropTypes.array,
  /**Size of text */
  isBigFontSize: PropTypes.bool,
  /**Color of text */
  color: PropTypes.string,
};

export default Filters;
