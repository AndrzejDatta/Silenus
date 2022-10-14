import React, { useContext } from "react";
import PropTypes from "prop-types";
import MyPlant from "components/molecules/MyPlant/MyPlant";
import {
  StyledPlantSection,
  StyledPlantElementsSection,
} from "./PlantSection.styles";
import Headline from "components/molecules/Headline/Headline";
import { dataContext } from "providers/DataProvider";
const PlantSection = ({ headline = "Headline" }) => {
  const {
    Dashboard: { plants },
  } = useContext(dataContext);

  const plantElements = plants?.map(({ name }) => {
    console.log(name);
    return <MyPlant src="src" name={name} />;
  });
  return (
    <StyledPlantSection>
      <Headline text={headline} isBackground={false} />
      <StyledPlantElementsSection>{plantElements}</StyledPlantElementsSection>
    </StyledPlantSection>
  );
};

PlantSection.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default PlantSection;
