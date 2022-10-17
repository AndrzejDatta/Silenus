import React, { useContext } from "react";
import PropTypes from "prop-types";
import MyPlant from "components/molecules/MyPlant/MyPlant";
import {
  StyledPlantSection,
  StyledPlantElementsSection,
} from "./PlantSection.styles";
import Headline from "components/molecules/Headline/Headline";
import { dataContext } from "providers/DataProvider";
import Filters from "components/molecules/Filters/Filters";
const PlantSection = ({ headline = "Headline", isMyPots, isReturn, path }) => {
  const {
    Dashboard: { plants },
    MojeRośliny: { returnPath },
  } = useContext(dataContext);

  console.log(returnPath);
  const plantElements = plants?.map(({ name }) => {
    return <MyPlant src="src" name={name} />;
  });
  return (
    <StyledPlantSection>
      <Headline
        text={headline}
        icon
        path={path}
        isReturn={isReturn}
        returnPath={returnPath}
      />
      {isMyPots && <Filters isBig />}
      {isMyPots && <Headline text={"Moje ulubione"} />}
      <StyledPlantElementsSection>{plantElements}</StyledPlantElementsSection>
    </StyledPlantSection>
  );
};

PlantSection.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default PlantSection;
