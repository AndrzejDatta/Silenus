import React, { useContext } from "react";
import PropTypes, { shape } from "prop-types";
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
  const { potIcons } = useContext(dataContext);

  const detailsElements = parameters.map(({ text, src, infoText }, index) => {
    if (headline === "Pamiętnik rośliny") {
      return <UserActivity name={text} activities={infoText} src={src} />;
    } else {
      return (
        <StyledDetailSection key={index}>
          <Icon color="green" size="tiny" icon={potIcons[src]} />
          <StyledDetailsTextSection>
            <ActivityText text={text} isHeadline color="black" />
            <ActivityText text={infoText} color="black" />
          </StyledDetailsTextSection>
        </StyledDetailSection>
      );
    }
  });
  return (
    <StyledSection>
      <ActivityText text={headline} isHeadline color="#3AA688" />
      {detailsElements}
    </StyledSection>
  );
};

DetailParameters.propTypes = {
  /**text in headline */
  headline: PropTypes.string.isRequired,
  /**parameters - object */
  parameters: PropTypes.arrayOf(shape),
};

export default DetailParameters;
