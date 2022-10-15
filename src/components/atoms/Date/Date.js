import React from "react";
import PropTypes from "prop-types";
import { StyledDate, StyledDateText } from "./Date.styles";
const Date = ({ dayName = "Mon", dayNumber = 21 }) => {
  return (
    <StyledDate>
      <StyledDateText>{dayName}</StyledDateText>
      <StyledDateText isNumber>{dayNumber}</StyledDateText>
    </StyledDate>
  );
};

Date.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
};

export default Date;
