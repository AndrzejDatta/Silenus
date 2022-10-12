import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import Icon from "components/atoms/icon/icon.component";
import {
  StyledUserAccountOptions,
  StyledUserAccountOptionsSection,
} from "./UserAccountOptions.styles";

const UserAccountOptions = (props) => {
  const {
    KontoUżytkownika: { options, headings },
    images,
  } = useContext(dataContext);
  const optionsElement = options?.map(({ option, iconSrc }) => {
    if (option === "Wyloguj się") {
      return (
        <StyledUserAccountOptions>
          <Icon icon={images[iconSrc]} size="tiny" color="black" />
          <UserAccountText
            text={option}
            isLogout={true}
            isHeadling={false}
            isOption={false}
          />
        </StyledUserAccountOptions>
      );
    } else {
      return (
        <StyledUserAccountOptions>
          <Icon icon={images[iconSrc]} size="tiny" color="green" />
          <UserAccountText
            text={option}
            isLogout={false}
            isHeadling={false}
            isOption={true}
          />
        </StyledUserAccountOptions>
      );
    }
  });
  const headingElements = headings?.map((item) => {
    return (
      <UserAccountText
        text={item}
        isLogout={false}
        isHeadling={true}
        isOption={false}
        isUser={true}
      />
    );
  });
  optionsElement.splice(0, 0, headingElements[0]);
  optionsElement.splice(3, 0, headingElements[1]);

  return (
    <StyledUserAccountOptionsSection>
      {optionsElement}
    </StyledUserAccountOptionsSection>
  );
};

UserAccountOptions.propTypes = {};

export default UserAccountOptions;
