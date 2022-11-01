import React from "react";
import PropTypes, { shape } from "prop-types";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import {
  StyledUserAccountStatus,
  StyledUserAccountStatusSection,
  StyledUserAccountSection,
  StyledUserAccountName,
} from "./UserAccountStatus.styles";
import Icon from "components/atoms/icon/icon.component";
import plantUser from "assets/icons/plantUser.svg";
const UserAccountStatus = ({ name, status }) => {
  const statusElement = status?.map(({ name, number }, index) => {
    return (
      <StyledUserAccountStatusSection key={index} isInfo={true}>
        <UserAccountText
          text={name}
          isHeading={false}
          isUseInUserAccountPage={true}
          color="#3AA688"
        />
        <UserAccountText
          text={number.toString()}
          isHeading={true}
          isUseInUserAccountPage={true}
          color="#3AA688"
        />
      </StyledUserAccountStatusSection>
    );
  });

  return (
    <StyledUserAccountSection>
      <StyledUserAccountName>
        <Icon icon={plantUser} color="green" size="small" />
        <UserAccountText
          text={name}
          isHeading={true}
          isUseInUserAccountPage={false}
          color="#3AA688"
        />
      </StyledUserAccountName>
      <StyledUserAccountStatus>{statusElement}</StyledUserAccountStatus>
    </StyledUserAccountSection>
  );
};
UserAccountStatus.propTypes = {
  /**user name */
  name: PropTypes.string.isRequired,
  /** user's achivments*/
  status: PropTypes.arrayOf(shape),
};
export default UserAccountStatus;
