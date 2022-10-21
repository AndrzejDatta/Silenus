import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import UserImg from "components/atoms/UserImg/UserImg";
import UserAccountStatus from "components/molecules/UserAccountStatus/UserAccountStatus";
import { StyledUserAccountInfo } from "./UserAccountInfo.styles";
const UserAccountInfo = (props) => {
  const {
    KontoUżytkownika: { status },
  } = useContext(dataContext);
  return (
    <StyledUserAccountInfo>
      <UserImg />
      <UserAccountStatus name="Piotrek" status={status} />
    </StyledUserAccountInfo>
  );
};

UserAccountInfo.propTypes = {};

export default UserAccountInfo;
