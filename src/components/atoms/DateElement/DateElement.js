import React from "react";
import PropTypes from "prop-types";
import { StyledDate, StyledDateText } from "./DateElement.styles.";
const DateElement = ({ dayName = "Mon", dayNumber = 21, isNow }) => {
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
  dayName: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
};

export default DateElement;
