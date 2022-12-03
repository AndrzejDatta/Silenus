import React from "react";
import PropTypes from "prop-types";
import { StyledSearchBar, StyledSearchBarSection } from "./SearchBar.styles";
import Icon from "components/atoms/icon/icon.component";
import scan from "assets/icons/scan.svg";
import magnifier from "assets/icons/magnifier.svg";
import CustomInput from "components/atoms/customInput/customInput.component";
import FilteredList from "../FilteredList/FilteredList";
import { useState } from "react";
const SearchBar = ({ isSearchBar }) => {
  const [query, setQuery] = useState("");

  const type = (value) => {
    setQuery(value);
  };

  return (
    <StyledSearchBarSection>
      <StyledSearchBar>
        <CustomInput
          type={"text"}
          placeholder=""
          color="black"
          size="small"
          fontSize="14px"
          isSearchBar={isSearchBar}
          typing={(e) => type(e.target.value)}
        />
        <Icon icon={magnifier} size="tiny" color="black" isSearchBar={true} />
        <Icon
          icon={scan}
          size="tiny"
          color="black"
          isSearchBar={true}
          isOnRightSide={true}
        />
      </StyledSearchBar>
      {query && <FilteredList query={query} />}
    </StyledSearchBarSection>
  );
};

SearchBar.defaultProps = {
  isSearchBar: false,
};

SearchBar.propTypes = {
  /**bool decides about icons in input */
  isSearchBar: PropTypes.bool,
};

export default SearchBar;
