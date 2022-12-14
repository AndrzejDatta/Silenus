import React from "react";
import PropTypes from "prop-types";
import { StyledDetailsHeadlineSection } from "./HeadlineDetailSection.styles";
import Img from "components/atoms/Img/Img";
import Link from "components/atoms/Link/Link";
import image from "assets/images/mobile/plant.png";
import DetailsText from "components/molecules/DetailsText/DetailsText";
import returnSvg from "assets/icons/return.svg";
const HeadlineDetailSection = ({ url, headline, filterText }) => {
  return (
    <StyledDetailsHeadlineSection data-cy="dashboard">
      <Link
        icon={returnSvg}
        color={"green"}
        size="tiny"
        path={"/dashboard"}
        isDetailsPage={true}
      />
      <Img size="large" url={image} isDetailsPage={true} />
      <DetailsText headline={headline} filterText={filterText} />
    </StyledDetailsHeadlineSection>
  );
};

HeadlineDetailSection.propTypes = {
  url: "",
  headline: "Headline",
  filterText: "filterText",
};

HeadlineDetailSection.propTypes = {
  /** */
  url: PropTypes.string,
  headline: PropTypes.string,
  filterText: PropTypes.string,
};

export default HeadlineDetailSection;
