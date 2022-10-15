import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PropTypes from "prop-types";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import CategorySection from "components/organisms/CategorySection/CategorySection";
const IdentifyPage = (props) => {
  return (
    <MainTemplate isIdentifyPlant>
      <SearchBar />
      <CategorySection />
    </MainTemplate>
  );
};

IdentifyPage.propTypes = {};

export default IdentifyPage;
