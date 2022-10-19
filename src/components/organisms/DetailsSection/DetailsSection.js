import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import { StyledPotDetailsSection } from "./DetailsSection.styles";
import DetailParameters from "components/molecules/DetailParameters/DetailParameters";
const PotDetailsSection = (props) => {
  const {
    Details: { pot, plant, calendar },
  } = useContext(dataContext);

  const potParametersElement = () => {
    return <DetailParameters details={pot} />;
  };
  const plantParametersElement = () => {
    return <DetailParameters details={plant} />;
  };
  const calendarParametersElement = () => {
    return <DetailParameters details={calendar} />;
  };
  return (
    <StyledPotDetailsSection>
      {potParametersElement}
      {plantParametersElement}
      {calendarParametersElement}
    </StyledPotDetailsSection>
  );
};

PotDetailsSection.propTypes = {};

export default PotDetailsSection;
