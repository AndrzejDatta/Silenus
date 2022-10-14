import React from "react";
import PropTypes from "prop-types";
import {
  StyledUserActivity,
  StyledUserActivityInfo,
  StyledUserActivityText,
} from "./UserActivity.styles";
import Img from "components/atoms/Img/Img";
import Icon from "components/atoms/icon/icon.component";
import facebookIcon from "assets/icons/facebook.svg";
import ActivityText from "components/atoms/ActivityText/ActivityText";
const UserActivity = ({ name = "name", src, activities }) => {
  return (
    <StyledUserActivity>
      <Img url={src} size="tiny" />
      <StyledUserActivityInfo>
        <ActivityText text={name} isHeadline={true} isDetails={false} />
        <StyledUserActivityText>
          <StyledUserActivityInfo isActicity={true}>
            <Icon color="green" size="tiny" src={facebookIcon} />
            <ActivityText
              text={activities.text}
              isHeadline={false}
              isDetails={false}
            />
          </StyledUserActivityInfo>
          ;
        </StyledUserActivityText>
      </StyledUserActivityInfo>
    </StyledUserActivity>
  );
};

UserActivity.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  activities: PropTypes.shape,
};

export default UserActivity;
