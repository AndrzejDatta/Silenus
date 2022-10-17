import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledDateSection } from "./DateSection.styles";
import DateElement from "components/atoms/DateElement/DateElement";
const DateSection = (props) => {
  //TODO:sprawdzic sktory ang
  //Tutaj za pomoca dataContext chce wyciągać czy jest ang czy pol
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dni = ["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
  let daysNames = [];
  let daysBefore = [...days];
  let daysAfter = [...days];
  let daysNumbers = [];
  const date = new Date();
  //const year = date.getFullYear();
  //const month = date.getMonth();
  const dayNumber = date.getDate();
  let j = 0;
  //const daysInMonth = new Date(year, month + 1, 0).getDate();
  let length = dayNumber;
  const dayName = dni[date.getDay()];

  for (let i = length; i < length + 7; i++) {
    console.log(i);
    daysNumbers[j] = i;
    console.log(daysNumbers[i]);
    j++;
  }

  daysAfter = dni.slice(3, 7);
  daysBefore = dni.slice(0, 3);
  daysNames = daysAfter.concat(daysBefore);

  console.log(daysNames);

  const dateElements = daysNames.map((item, index) => {
    console.log(index);
    console.log(daysNumbers);
    if (item === dayName) {
      return <DateElement dayName={item} dayNumber={dayNumber} isNow />;
    } else {
      return <DateElement dayName={item} dayNumber={daysNumbers[index]} />;
    }
  });

  return <StyledDateSection>{dateElements}</StyledDateSection>;
};

DateSection.propTypes = {};

export default DateSection;