import React from "react";
import PropTypes from "prop-types";
import UserImg from "components/atoms/UserImg/UserImg";
import UserAccountStatus from "components/molecules/UserAccountStatus/UserAccountStatus";
import { StyledUserAccountInfo } from "./UserAccountInfo.styles";
const UserAccountInfo = (props) => {
  return (
    <StyledUserAccountInfo>
      <UserImg />
      <UserAccountStatus />
    </StyledUserAccountInfo>
  );
};

UserAccountInfo.propTypes = {};

export default UserAccountInfo;
