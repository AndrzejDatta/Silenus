import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Date from 'components/atoms/DateElement/DateElement';
import DateSection from 'components/molecules/DateSection/DateSection';
import Headline from 'components/molecules/Headline/Headline';
import { dataContext } from 'providers/DataProvider';
import UserActivitiesSection from 'components/organisms/UserActivitiesSection/UserActivitiesSection';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Filters from 'components/molecules/Filters/Filters';
import { StyledCalendarWrapper } from './Calendar.styles';
const Calendar = (props) => {
  const {
    KalendarzOpieki: { headings },
  } = useContext(dataContext);
  return (
    <MainTemplate>
      <StyledCalendarWrapper>
        <Headline text={headings} isHeading isCalendar />
        <DateSection />
        <Filters />
        <UserActivitiesSection isCalendar />
      </StyledCalendarWrapper>
    </MainTemplate>
  );
};

Calendar.propTypes = {};

export default Calendar;
