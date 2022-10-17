import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import PotStatus from "components/molecules/PotStatus/PotStatus";
import { StyledPotSection } from "./PotSection.styles";
import Headline from "components/molecules/Headline/Headline";
const PotSection = ({ headline = "Headline", isDashboard, path, isReturn }) => {
  const {
    Dashboard: { plants },
    MojeDoniczki: { returnPath, toPath },
  } = useContext(dataContext);

  const elements = plants?.map(({ state, name }) => {
    return <PotStatus state={state} name={name} />;
  });
  return (
    <StyledPotSection>
      <Headline
        text={headline}
        isBackground
        icon
        path={path ? path : toPath}
        returnPath={returnPath}
        isReturn={isReturn}
      />
      {elements}
    </StyledPotSection>
  );
};

PotSection.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default PotSection;
