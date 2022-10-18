import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  StyledUserActivitySection,
  StyledUserActivityElement,
} from "./UserActivitiesSection.styles";
import UserActivity from "components/molecules/UserActivity/UserActivity";
import Headline from "components/molecules/Headline/Headline";
import Filters from "components/molecules/Filters/Filters";
import { dataContext } from "providers/DataProvider";
import ActivityText from "components/atoms/ActivityText/ActivityText";
const UserActivitiesSection = ({
  headline = "Headline",
  isCalendar,
  isDashboard,
  icon,
  path,
}) => {
  const {
    Dashboard: { activities },
  } = useContext(dataContext);

  console.log(activities);
  const activitiesElement = activities?.map(
    ({ name, src, activity }, index) => {
      return (
        <StyledUserActivityElement>
          <ActivityText text="when" color="#3AA688" />
          <UserActivity
            name={name}
            src={src}
            activities={activity}
            isCalendar={isCalendar}
            key={index}
          />
        </StyledUserActivityElement>
      );
    }
  );
  return (
    <StyledUserActivitySection>
      {!isCalendar && <Headline text={headline} icon path={path} />}
      {!isCalendar && <Filters isBig />}
      {activitiesElement}
    </StyledUserActivitySection>
  );
};

UserActivitiesSection.propTypes = {
  headline: PropTypes.string.isRequired,
  isCalendar: PropTypes.bool,
};

export default UserActivitiesSection;
