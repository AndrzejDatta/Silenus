import React from "react";
import PropTypes from "prop-types";
import { StyledSearchBar } from "./SearchBar.styles";
import Icon from "components/atoms/icon/icon.component";
import scan from "assets/icons/scan.svg";
import magnifier from "assets/icons/magnifier.svg";
import CustomInput from "components/atoms/customInput/customInput.component";
const SearchBar = ({ isSearchBar }) => {
  return (
    <StyledSearchBar>
      <CustomInput
        type={"text"}
        placeholder=""
        color="black"
        size="small"
        fontSize="14px"
        isSearchBar={isSearchBar}
      />
      <Icon icon={magnifier} size="tiny" color="black" isSearchBar={true} />
      <Icon
        icon={scan}
        size="tiny"
        color="black"
        isOnRightSide={true}
        isSearchBar={true}
      />
    </StyledSearchBar>
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
