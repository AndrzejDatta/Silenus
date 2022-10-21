import React from "react";
import PropTypes from "prop-types";
import { StyledDate, StyledDateText } from "./DateElement.styles.";
const DateElement = ({ dayName = "Mon", dayNumber = 21, isNow = false }) => {
  return (
    <StyledDate isNow={isNow}>
      <StyledDateText isNow={isNow}>{dayName}</StyledDateText>
      <StyledDateText isNumber isNow={isNow}>
        {dayNumber}
      </StyledDateText>
    </StyledDate>
  );
};

DateElement.propTypes = {
  /**name of day */
  dayName: PropTypes.string.isRequired,
  /**number of day */
  dayNumber: PropTypes.number.isRequired,
  /**bool which decides about background color */
  isNow: PropTypes.bool.isRequired,
};

export default DateElement;
