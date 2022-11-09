import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import CategorySection from "../CategorySection/CategorySection";
import { StyledPotDetailsSection } from "./DetailsSection.styles";
import DetailParameters from "components/molecules/DetailParameters/DetailParameters";

const PotDetailsSection = ({ isPlant }) => {
  const {
    Details: { pot, plant, calendar },
  } = useContext(dataContext);

  return (
    <StyledPotDetailsSection>
      {!isPlant && <DetailParameters details={pot} />}
      <DetailParameters details={plant} />
      {isPlant && (
        <CategorySection
          filters={[
            {
              text: "bezpieczne dla zwierząt",
              src: "pet.svg",
            },
            {
              text: "rośliny zielone",
              src: "plant.svg",
            },
          ]}
        />
      )}
      <DetailParameters details={calendar} />
    </StyledPotDetailsSection>
  );
};

PotDetailsSection.defaultProps = {
  isPlant: false,
};
PotDetailsSection.propTypes = {
  /**bool which decides about showing some components, says on which page user is  */
  isPlant: PropTypes.bool,
};

export default PotDetailsSection;
