import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
const UserAccountOptions = (props) => {
  const {
    KontoUżytkownika: { options },
  } = useContext(dataContext);
  const optionsElement = options?.map((item) => {
    if (item === "Wyloguj się") {
      return (
        <UserAccountText
          text={item}
          isLogout={true}
          isHeadling={false}
          isOption={false}
        />
      );
    } else {
      return (
        <UserAccountText
          text={item}
          isLogout={false}
          isHeadling={false}
          isOption={true}
        />
      );
    }
  });

  return optionsElement;
};

UserAccountOptions.propTypes = {};

export default UserAccountOptions;
