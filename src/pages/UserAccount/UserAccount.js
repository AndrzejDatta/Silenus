import React, { useContext } from "react";
import { dataContext } from "providers/DataProvider";
import UserAccountInfo from "components/organisms/UserAccountInfo/UserAccountInfo";
import UserAccountOptions from "components/molecules/UserAccountOptions/UserAccountOptions";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
const UserAccount = () => {
  const {
    KontoUżytkownika: { optionsProfil, optionsSettings, headings },
  } = useContext(dataContext);

  return (
    <MainTemplate>
      <UserAccountInfo />
      <UserAccountOptions headline={headings[0]} options={optionsProfil} />
      <UserAccountOptions headline={headings[1]} options={optionsSettings} />
    </MainTemplate>
  );
};

export default UserAccount;
