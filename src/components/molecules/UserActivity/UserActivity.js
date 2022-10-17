import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledUserActivity,
  StyledUserActivityInfo,
  StyledUserActivityText,
  StyledUserActivityEdit,
} from './UserActivity.styles';
import Img from 'components/atoms/Img/Img';
import Icon from 'components/atoms/icon/icon.component';
import facebookIcon from 'assets/icons/facebook.svg';
import pen from 'assets/icons/pen.svg';
import ActivityText from 'components/atoms/ActivityText/ActivityText';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
const UserActivity = ({ name, src, activities, isCalendar }) => {
  console.log('activities', activities);
  return (
    <StyledUserActivity>
      <Img url={src} size="tiny" />
      <StyledUserActivityInfo>
        <StyledUserActivityEdit>
          <ActivityText text={name} isHeadline={true} isDetails={false} />
          {isCalendar && <Icon color="#CFE7E0" size="tiny" icon={pen} />}
        </StyledUserActivityEdit>
        <StyledUserActivityText>
          <StyledUserActivityInfo isActivity={true}>
            <Icon color="green" size="tiny" icon={facebookIcon} />
            <ActivityText
              text={activities.text}
              isHeadline={false}
              isDetails={false}
            />
          </StyledUserActivityInfo>
          {isCalendar && <ToggleSwitch />}
        </StyledUserActivityText>
      </StyledUserActivityInfo>
    </StyledUserActivity>
  );
};

UserActivity.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  activities: PropTypes.shape({
    text: PropTypes.string,
    src: PropTypes.string,
  }),
};

UserActivity.defaultProps = {
  name: 'name',
};

export default UserActivity;
