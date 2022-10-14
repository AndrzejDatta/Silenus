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
const UserActivitiesSection = ({ headline }) => {
  const {
    Dashboard: { activities },
  } = useContext(dataContext);

  console.log(activities);
  const activitiesElement = activities?.map(({ name, src, activity }) => {
    return (
      <StyledUserActivityElement>
        <UserActivity name={name} src={src} activities={activity} />
      </StyledUserActivityElement>
    );
  });
  return (
    <StyledUserActivitySection>
      <Headline text={headline} isBackground={false} />
      <Filters isBig={true} isDashboard={true} />
      {activitiesElement}
    </StyledUserActivitySection>
  );
};

UserActivitiesSection.propTypes = {};

export default UserActivitiesSection;
