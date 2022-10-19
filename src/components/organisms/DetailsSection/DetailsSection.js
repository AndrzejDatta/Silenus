import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import { StyledPotDetailsSection } from "./DetailsSection.styles";

import PotParameters from "components/molecules/DetailParameters/DetailParameters";
const PotDetailsSection = (props) => {
  const { Details } = useContext(dataContext);

  const PotParametersElement = Details?.map((detailsInfo) => {
    return <PotParameters details={detailsInfo} />;
  });
  return (
    <StyledPotDetailsSection>{PotParametersElement}</StyledPotDetailsSection>
  );
};

PotDetailsSection.propTypes = {};

export default PotDetailsSection;
