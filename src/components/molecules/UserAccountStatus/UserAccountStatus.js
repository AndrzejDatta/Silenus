import React, { useContext } from "react";
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

  const statusElement = status?.map(({ name, number }, index) => {
    return (
      <StyledUserAccountStatusSection key={index} isInfo={true}>
        <UserAccountText
          text={name}
          isHeading={false}
          isUser={true}
          color="#3AA688"
        />
        <UserAccountText
          text={number.toString()}
          isHeading={true}
          isUser={true}
          color="#3AA688"
        />
      </StyledUserAccountStatusSection>
    );
  });

  return (
    <StyledUserAccountSection>
      <StyledUserAccountName>
        <Icon icon={plantUser} color="green" size="small" />
        <UserAccountText text="Piotr" isHeading={true} color="#3AA688" />
      </StyledUserAccountName>
      <StyledUserAccountStatus>{statusElement}</StyledUserAccountStatus>
    </StyledUserAccountSection>
  );
};

export default UserAccountStatus;
