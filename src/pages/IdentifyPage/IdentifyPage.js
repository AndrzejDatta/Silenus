import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PropTypes from "prop-types";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import IdentifySection from "components/organisms/IdentifySection/IdentifySection";
import CategorySection from "components/organisms/CategorySection/CategorySection";
const IdentifyPage = (props) => {
  return (
    <MainTemplate isIdentifyPlant>
      <SearchBar isSearchBar />
      <IdentifySection />
      <CategorySection />
    </MainTemplate>
  );
};

IdentifyPage.propTypes = {};

export default IdentifyPage;
