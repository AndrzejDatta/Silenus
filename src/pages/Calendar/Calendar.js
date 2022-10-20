import React, { useContext } from "react";
import PropTypes from "prop-types";
import Date from "components/atoms/DateElement/DateElement";
import DateSection from "components/molecules/DateSection/DateSection";
import Headline from "components/molecules/Headline/Headline";
import { dataContext } from "providers/DataProvider";
import UserActivitiesSection from "components/organisms/UserActivitiesSection/UserActivitiesSection";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Filters from "components/molecules/Filters/Filters";
const Calendar = (props) => {
  const {
    KalendarzOpieki: { headings },
  } = useContext(dataContext);
  return (
    <MainTemplate>
      <Headline text={headings} isHeading isCalendar />
      <DateSection />
      <Filters />
      <UserActivitiesSection isCalendar />
    </MainTemplate>
  );
};

Calendar.propTypes = {};

export default Calendar;
