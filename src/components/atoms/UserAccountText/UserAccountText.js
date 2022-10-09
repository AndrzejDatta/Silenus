import React from "react";
import PropTypes from "prop-types";
import { StyledUserAccountText } from "./UserAccountText.styles";
const UserAccountText = ({ text, isHeadling, isLogout }) => {
  return (
    <StyledUserAccountText isHeadling={isHeadling} isLogout={isLogout}>
      {text}
    </StyledUserAccountText>
  );
};

UserAccountText.propTypes = {
  /**text in UserAccount */
  text: PropTypes.string.isRequired,
  /** bool which decides about font-weight */
  isHeadling: PropTypes.bool.isRequired,
  /** bool which decides about color */
  isLogout: PropTypes.bool.isRequired,
};

export default UserAccountText;
