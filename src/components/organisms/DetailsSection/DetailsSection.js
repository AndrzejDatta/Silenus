import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import { StyledPotDetailsSection } from "./DetailsSection.styles";
import DetailParameters from "components/molecules/DetailParameters/DetailParameters";
const PotDetailsSection = (isPlant) => {
  const {
    Details: { pot, plant, calendar },
  } = useContext(dataContext);

  console.log(calendar);
  return (
    <StyledPotDetailsSection>
      {!isPlant && <DetailParameters details={pot} />}
      <DetailParameters details={plant} />
      <DetailParameters details={calendar} />
    </StyledPotDetailsSection>
  );
};

PotDetailsSection.propTypes = {};

export default PotDetailsSection;
