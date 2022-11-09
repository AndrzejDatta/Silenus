import React from "react";
import PropTypes from "prop-types";
import { StyledFilter, StyledFilterText } from "./Filter.styles";
import Icon from "components/atoms/icon/icon.component";

const Filter = ({
  text,
  icon,
  isBigFontSize,
  color,
  isCategoryInIdentifyPage,
}) => {
  return (
    <StyledFilter isCategoryInIdentifyPage={isCategoryInIdentifyPage}>
      {icon && <Icon icon={icon} size="tiny" color="green" />}
      <StyledFilterText
        isCategoryInIdentifyPage={isCategoryInIdentifyPage}
        isBigFontSize={isBigFontSize}
        color={color}
      >
        {text}
      </StyledFilterText>
    </StyledFilter>
  );
};

Filter.defaultProps = {
  text: "Filter",
  icon: "",
  isBigFontSize: false,
  color: "black",
  isCategoryInIdentifyPage: false,
};

Filter.propTypes = {
  /**text inject in div */
  text: PropTypes.string.isRequired,
  /**src to icon */
  icon: PropTypes.string,
  /**Size of text */
  isBigFontSize: PropTypes.bool,
  /**Color of text */
  color: PropTypes.string,
  /**bool which decides about padding */
  isCategoryInIdentifyPage: PropTypes.bool,
};

export default Filter;
