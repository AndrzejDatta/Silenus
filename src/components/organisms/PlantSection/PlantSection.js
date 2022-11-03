import React, { useContext } from "react";
import PropTypes from "prop-types";
import MyPlant from "components/molecules/MyPlant/MyPlant";
import {
  StyledPlantSection,
  StyledPlantElementsSection,
  StyledLink,
} from "./PlantSection.styles";
import Headline from "components/molecules/Headline/Headline";
import { dataContext } from "providers/DataProvider";
import Filters from "components/molecules/Filters/Filters";
const PlantSection = ({ headline, isMyPotsPage, isPossibleToReturn, path }) => {
  const {
    Dashboard: { plants },
    MojeRośliny: { returnPath },
  } = useContext(dataContext);

  const plantElements = plants?.map(({ name }, index) => {
    return (
      <StyledLink to="/dashboard/plantdetails" key={index}>
        <MyPlant src="src" name={name} />
      </StyledLink>
    );
  });
  return (
    <StyledPlantSection>
      <Headline
        text={headline}
        icon
        path={path}
        isPossibleToReturn={isPossibleToReturn}
        returnPath={returnPath}
      />
      {isMyPotsPage && <Filters isBigFontSize color="#3AA688" />}
      {isMyPotsPage && <Headline text={"Moje ulubione"} />}
      <StyledPlantElementsSection>{plantElements}</StyledPlantElementsSection>
    </StyledPlantSection>
  );
};

PlantSection.defaultProps = {
  headline: "Headline",
  isMyPotsPage: false,
  isPossibleToReturn: false,
  path: "/dashboard",
};

PlantSection.propTypes = {
  /**text in headline */
  headline: PropTypes.string.isRequired,
  /** bool which says that this page is MyPotsPage*/
  isMyPotsPage: PropTypes.bool,
  /** bool which says that is possible to return to last page*/
  isPossibleToReturn: PropTypes.bool,
  /** path to next page*/
  path: PropTypes.string,
};

export default PlantSection;
