import React from "react";
import { StyledDateSection } from "./DateSection.styles";
import DateElement from "components/atoms/DateElement/DateElement";
const DateSection = (props) => {
  //const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dni = ["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
  let daysNames = [];
  let daysBeforeToday = [...dni];
  let daysAfterToday = [...dni];
  let daysNumbers = [];
  const date = new Date();

  const dayNumber = date.getDate();
  let j = 0;

  let length = dayNumber;

  for (let i = length; i < length + 7; i++) {
    daysNumbers[j] = i;
    j++;
  }

  daysAfterToday = dni.slice(3, 7);
  daysBeforeToday = dni.slice(0, 3);
  daysNames = daysAfterToday.concat(daysBeforeToday);

  const dateElements = daysNames.map((item, index) => {
    if (daysNumbers[index] === dayNumber) {
      return (
        <DateElement
          key={index}
          dayName={item}
          dayNumber={daysNumbers[index]}
          isToday={true}
        />
      );
    } else {
      return (
        <DateElement
          key={index}
          dayName={item}
          dayNumber={daysNumbers[index]}
        />
      );
    }
  });

  return <StyledDateSection>{dateElements}</StyledDateSection>;
};

export default DateSection;
