import React from "react";
import PropTypes from "prop-types";
import { StyledSubtitle } from "components/atoms/Subtitle/Subtitle.styles";
const Subtitle = ({ subtitle, pageType }) => {
  return <StyledSubtitle pageType={pageType}>{subtitle}</StyledSubtitle>;
};

Subtitle.defaultProps = {
  subtitle: "smart plants",
  pageType: "loginPage",
};
Subtitle.propTypes = {
  /**text in Subtitle atom*/
  subtitle: PropTypes.string.isRequired,
  /** type pf page */
  pageType: PropTypes.string.isRequired,
};

export default Subtitle;
