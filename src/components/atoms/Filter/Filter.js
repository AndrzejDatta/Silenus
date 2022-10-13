import React from "react";
import PropTypes from "prop-types";
import { StyledFilter, StyledFilterText } from "./Filter.styles";
import Icon from "components/atoms/icon/icon.component";
import UserAccountText from "../UserAccountText/UserAccountText";
const Filter = ({
  text = "Filter",
  icon,
  isBig = true,
  isDashboard = true,
}) => {
  return (
    <StyledFilter>
      {icon && <Icon icon={icon} size="tiny" color="green" />}
      <StyledFilterText isBig={isBig} isDashboard={isDashboard}>
        {text}
      </StyledFilterText>
    </StyledFilter>
  );
};

Filter.propTypes = {
  /**text inject in div */
  text: PropTypes.string.isRequired,
  /**src to icon */
  icon: PropTypes.string,
  /**Size of text */
  isBig: PropTypes.bool,
  /**Color of text */
  isDashboard: PropTypes.bool,
};

export default Filter;
