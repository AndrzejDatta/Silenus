import React from "react";
import PropTypes from "prop-types";
import { StyledDetailsHeadlineSection } from "./HeadlineDetailSection.styles";
import Img from "components/atoms/Img/Img";
import image from "assets/images/mobile/plant.png";
import DetailsText from "components/molecules/DetailsText/DetailsText";
const HeadlineDetailSection = ({ url, headline, filterText }) => {
  return (
    <StyledDetailsHeadlineSection>
      <Img size="large" url={image} />
      <DetailsText headline={headline} filterText={filterText} />
    </StyledDetailsHeadlineSection>
  );
};

HeadlineDetailSection.propTypes = {};

export default HeadlineDetailSection;
