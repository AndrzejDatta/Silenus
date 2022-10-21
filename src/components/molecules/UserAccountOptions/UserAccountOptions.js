import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import Icon from "components/atoms/icon/icon.component";
import {
  StyledUserAccountOptions,
  StyledUserAccountOptionsSection,
} from "./UserAccountOptions.styles";

const UserAccountOptions = ({ headline, options }) => {
  const { images } = useContext(dataContext);
  const optionsElement = options?.map(({ option, iconSrc }, index) => {
    return (
      <StyledUserAccountOptions key={index}>
        <Icon
          icon={images[iconSrc]}
          size="tiny"
          color={option === "Wyloguj się" ? "black" : "green"}
        />
        <UserAccountText
          text={option}
          isHeading={false}
          isOption={true}
          color={option === "Wyloguj się" ? "black" : "#3AA688"}
        />
      </StyledUserAccountOptions>
    );
  });

  return (
    <StyledUserAccountOptionsSection>
      <UserAccountText
        text={headline}
        isHeading={true}
        isUser={true}
        color="#3AA688"
      />
      {optionsElement}
    </StyledUserAccountOptionsSection>
  );
};

UserAccountOptions.propTypes = {
  /**name of plant */
  headline: PropTypes.string.isRequired,
  /**objct with info about plant */
  options: PropTypes.arrayOf(),
};

export default UserAccountOptions;
