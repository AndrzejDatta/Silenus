import React from "react";
import PropTypes from "prop-types";
import { StyledDate, StyledDateText } from "./DateElement.styles.";
const DateElement = ({ dayName, dayNumber, isToday }) => {
  return (
    <StyledDate isToday={isToday}>
      <StyledDateText isToday={isToday}>{dayName}</StyledDateText>
      <StyledDateText isNumber isToday={isToday}>
        {dayNumber}
      </StyledDateText>
    </StyledDate>
  );
};

DateElement.defaultProps = {
  dayName: "Mon",
  dayNumber: 21,
  isToday: false,
};
DateElement.propTypes = {
  /**name of day */
  dayName: PropTypes.string.isRequired,
  /**number of day */
  dayNumber: PropTypes.number.isRequired,
  /**bool which decides about background color */
  isToday: PropTypes.bool.isRequired,
};

export default DateElement;
