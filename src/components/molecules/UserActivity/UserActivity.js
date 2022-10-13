import React from "react";
import PropTypes from "prop-types";
import {
  StyledUserActivity,
  StyledUserActivityInfo,
  StyledUserActivityText,
} from "./UserActivity.styles";
import Img from "components/atoms/Img/Img";
import Icon from "components/atoms/icon/icon.component";
import ActivityText from "components/atoms/ActivityText/ActivityText";
const UserActivity = ({ name, src, activities }) => {
  const activitiesElement = activities.map(({ src, text }) => {
    return (
      <StyledUserActivityInfo>
        <Icon color="green" size="tiny" src={src} />
        <ActivityText text={name} isHeadline={false} isDetails={false} />
      </StyledUserActivityInfo>
    );
  });

  return (
    <StyledUserActivity>
      <Img url={src} size="tiny" />
      <StyledUserActivityInfo>
        <ActivityText text={name} isHeadline={true} isDetails={false} />
        <StyledUserActivityText>{activities}</StyledUserActivityText>
      </StyledUserActivityInfo>
    </StyledUserActivity>
  );
};

UserActivity.propTypes = {};

export default UserActivity;
