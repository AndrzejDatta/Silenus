import React, { useContext } from "react";
import Filter from "components/atoms/Filter/Filter";
import { dataContext } from "providers/DataProvider";
import { StyledCategorySection, StyledSection } from "./CategorySection.styles";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
const CategorySection = ({ headline, filters }) => {
  const { categoryIcons } = useContext(dataContext);
  const categoryElements = filters?.map(({ text, src }, index) => {
    return (
      <Filter
        key={index}
        text={text}
        icon={categoryIcons[src]}
        isBig={true}
        isCategory
      />
    );
  });
  return (
    <StyledSection>
      {headline && (
        <UserAccountText
          text={headline}
          isHeading={false}
          isLogout={false}
          isOption={true}
        />
      )}
      <StyledCategorySection>{categoryElements}</StyledCategorySection>
    </StyledSection>
  );
};

export default CategorySection;
