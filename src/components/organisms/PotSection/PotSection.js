import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import PotStatus from "components/molecules/PotStatus/PotStatus";
import { StyledPotSection } from "./PotSection.styles";
const PotSection = (props) => {
  const {
    Dashboard: { plants },
  } = useContext(dataContext);

  const elements = plants?.map(({ state, name }) => {
    return <PotStatus state={state} name={name} />;
  });
  return <StyledPotSection>{elements}</StyledPotSection>;
};

PotSection.propTypes = {};

export default PotSection;
