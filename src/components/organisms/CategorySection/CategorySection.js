import React, { useContext } from "react";
import PropTypes from "prop-types";
import Filter from "components/atoms/Filter/Filter";
import Headline from "components/molecules/Headline/Headline";
import { dataContext } from "providers/DataProvider";
import {
  StyledCategorySection,
  StyledSection,
  tyledCategorySection,
} from "./CategorySection.styles";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
const CategorySection = (props) => {
  const {
    ZidentyfikujRośline: { headings, filters, buttonText },
  } = useContext(dataContext);

  const categoryElements = filters?.map(item);
  return (
    <StyledSection>
      <UserAccountText text={headings[1]} isHeading />
      <StyledCategorySection></StyledCategorySection>
    </StyledSection>
  );
};

CategorySection.propTypes = {};

export default CategorySection;
