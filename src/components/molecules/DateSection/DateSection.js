import React from 'react';
import { StyledDateSection } from './DateSection.styles';
import DateElement from 'components/atoms/DateElement/DateElement';
const DateSection = (props) => {
  //TODO:sprawdzic sktory ang
  //Tutaj za pomoca dataContext chce wyciągać czy jest ang czy pol
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dni = ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'];
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
    daysNumbers[j] = i;
    j++;
  }

  daysAfter = dni.slice(3, 7);
  daysBefore = dni.slice(0, 3);
  daysNames = daysAfter.concat(daysBefore);

  const dateElements = daysNames.map((item, index) => {
    if (item === dayName) {
      return (
        <DateElement key={index} dayName={item} dayNumber={dayNumber} isNow />
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
