import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "components/atoms/Title/Title.styles";
const Title = ({ title, pageType }) => {
  return <StyledTitle pageType={pageType}>{title}</StyledTitle>;
};

Title.defaultProps = {
  title: "Title",
  pageType: "startPage",
};
Title.propTypes = {
  /**text in Title atom*/
  title: PropTypes.string.isRequired,
  /**type of title (size of elements depend on it)*/
  pageType: PropTypes.string.isRequired,
};

export default Title;
