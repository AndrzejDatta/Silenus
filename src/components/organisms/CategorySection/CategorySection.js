import React, { useContext } from "react";
import PropTypes, { shape } from "prop-types";
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
        isBigFontSize={true}
        isCategoryInIdentifyPage
      />
    );
  });
  return (
    <StyledSection>
      {headline && (
        <UserAccountText
          text={headline}
          isUseInUserAccountPage={false}
          color="#3AA688"
        />
      )}
      <StyledCategorySection>{categoryElements}</StyledCategorySection>
    </StyledSection>
  );
};

CategorySection.defaultProps = {
  headline: "Headline",
  filters: [
    {
      text: "Src",
      src: "info.svg",
    },
  ],
};

CategorySection.propTypes = {
  /**name of plant */
  headline: PropTypes.string.isRequired,
  /**objct with info about plant */
  filters: PropTypes.arrayOf(shape),
};

export default CategorySection;
