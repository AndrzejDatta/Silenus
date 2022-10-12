import React from "react";
import PropTypes from "prop-types";
import UserAccountInfo from "components/organisms/UserAccountInfo/UserAccountInfo";
import UserAccountOptions from "components/molecules/UserAccountOptions/UserAccountOptions";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
const UserAccount = (props) => {
  return (
    <MainTemplate>
      <UserAccountInfo />
      <UserAccountOptions />
    </MainTemplate>
  );
};

UserAccount.propTypes = {};

export default UserAccount;
