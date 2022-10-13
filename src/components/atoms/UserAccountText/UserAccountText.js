import React from "react";
import PropTypes from "prop-types";
import { StyledUserAccountText } from "./UserAccountText.styles";
const UserAccountText = ({ text, isHeading, isUser, isLogout, isOption }) => {
  return (
    <StyledUserAccountText
      isHeading={isHeading}
      isOption={isOption}
      isLogout={isLogout}
      isUser={isUser}
    >
      {text}
    </StyledUserAccountText>
  );
};

UserAccountText.propTypes = {
  /**text in UserAccount */
  text: PropTypes.string.isRequired,
  /** bool which decides about font-weight */
  isHeading: PropTypes.bool.isRequired,
  /** bool which decides about color */
  isLogout: PropTypes.bool.isRequired,
};

export default UserAccountText;
