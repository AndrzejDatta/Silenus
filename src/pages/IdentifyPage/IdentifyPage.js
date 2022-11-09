import React, { useContext } from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PropTypes from "prop-types";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import IdentifySection from "components/organisms/IdentifySection/IdentifySection";
import CategorySection from "components/organisms/CategorySection/CategorySection";
import { dataContext } from "providers/DataProvider";
const IdentifyPage = (props) => {
  const {
    ZidentyfikujRośline: { headings, filters },
    categoryIcons,
  } = useContext(dataContext);

  return (
    <MainTemplate isIdentifyPlantPage>
      <SearchBar isSearchBar />
      <IdentifySection />
      <CategorySection headline={headings[1]} filters={filters} />
    </MainTemplate>
  );
};

IdentifyPage.propTypes = {};

export default IdentifyPage;
