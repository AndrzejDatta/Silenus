import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from 'components/atoms/Title/Title.styles';
const Title = ({ title, pageType }) => {
  return <StyledTitle pageType={pageType}>{title}</StyledTitle>;
};

Title.propTypes = {
  /**text in Title atom*/
  title: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default Title;
