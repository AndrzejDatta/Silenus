import React, { useContext } from "react";
import PropTypes from "prop-types";
import Filter from "components/atoms/Filter/Filter";
import Headline from "components/molecules/Headline/Headline";
import { dataContext } from "providers/DataProvider";
import { StyledCategorySection, StyledSection } from "./CategorySection.styles";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
const CategorySection = (props) => {
  const {
    ZidentyfikujRośline: { headings, filters },
    categoryIcons,
  } = useContext(dataContext);

  const categoryElements = filters?.map(({ text, src }) => {
    return (
      <Filter text={text} icon={categoryIcons[src]} isBig={true} isCategory />
    );
  });
  return (
    <StyledSection>
      <UserAccountText text={headings[1]} isHeading />
      <StyledCategorySection>{categoryElements}</StyledCategorySection>
    </StyledSection>
  );
};

CategorySection.propTypes = {};

export default CategorySection;
