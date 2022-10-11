import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import {
  StyledUserAccountStatus,
  StyledUserAccountStatusSection,
  StyledUserAccountSection,
  StyledUserAccountName,
} from "./UserAccountStatus.styles";
import Icon from "components/atoms/icon/icon.component";
import { dataContext } from "providers/DataProvider";
import plantUser from "assets/icons/plantUser.svg";
const UserAccountStatus = (props) => {
  const {
    KontoUżytkownika: { status },
  } = useContext(dataContext);

  const statusElement = status?.map(({ name, number }) => {
    return (
      <StyledUserAccountStatusSection isInfo={true}>
        <UserAccountText
          text={name}
          isHeadling={false}
          isLogout={false}
          isOption={true}
          isUser={true}
        />
        <UserAccountText
          text={number}
          isHeadling={true}
          isLogout={false}
          isOption={false}
          isUser={true}
        />
      </StyledUserAccountStatusSection>
    );
  });

  return (
    <StyledUserAccountSection>
      <StyledUserAccountName>
        <Icon icon={plantUser} color="green" size="small" />
        <UserAccountText
          text="Piotr"
          isHeadling={true}
          isLogout={false}
          isOption={false}
        />
      </StyledUserAccountName>
      <StyledUserAccountStatus>{statusElement}</StyledUserAccountStatus>
    </StyledUserAccountSection>
  );
};

UserAccountStatus.propTypes = {};

export default UserAccountStatus;
