import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import Icon from "components/atoms/icon/icon.component";
import ActivityText from "components/atoms/ActivityText/ActivityText";
import {
  StyledPotDetailSection,
  StyledPotDetailsTextSection,
} from "./PotParameters.styles";
const PotParameters = ({ text, src, infoText }) => {
  const { potIcons } = useContext(dataContext);
  return (
    <StyledPotDetailSection>
      <Icon color="green" size="tiny" icon={potIcons[src]} />
      <StyledPotDetailsTextSection>
        <ActivityText text={text} isHeadline color="black" />
        <ActivityText text={infoText} color="black" />
      </StyledPotDetailsTextSection>
    </StyledPotDetailSection>
  );
};

PotParameters.propTypes = {};

export default PotParameters;
