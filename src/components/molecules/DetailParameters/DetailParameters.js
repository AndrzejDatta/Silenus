import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import Icon from "components/atoms/icon/icon.component";
import UserActivity from "../UserActivity/UserActivity";
import ActivityText from "components/atoms/ActivityText/ActivityText";
import {
  StyledDetailSection,
  StyledDetailsTextSection,
  StyledSection,
} from "./DetailParameters.styles";
const DetailParameters = ({ details: { headline, parameters } }) => {
  console.log(headline);
  const { potIcons } = useContext(dataContext);

  const detailsElements = parameters.map(({ text, src, infoText }) => {
    if (headline === "Pamietnik rośliny") {
      <h1>unique</h1>;
    }
    return (
      <StyledDetailSection>
        <Icon color="green" size="tiny" icon={potIcons[src]} />
        <StyledDetailsTextSection>
          <ActivityText text={text} isHeadline color="black" />
          <ActivityText text={infoText} color="black" />
        </StyledDetailsTextSection>
      </StyledDetailSection>
    );
  });
  return (
    <StyledSection>
      <ActivityText text={headline} isHeadline color="#3AA688" />
      {detailsElements}
    </StyledSection>
  );
};

DetailParameters.propTypes = {};

export default DetailParameters;
