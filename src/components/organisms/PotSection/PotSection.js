import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import PotStatus from "components/molecules/PotStatus/PotStatus";
const PotSection = (props) => {
  const {
    Dashboard: { plants },
  } = useContext(dataContext);

  const elements = plants?.map(({ state, name }) => {
    return <PotStatus state={state} name={name} />;
  });
  return elements;
};

PotSection.propTypes = {};

export default PotSection;
