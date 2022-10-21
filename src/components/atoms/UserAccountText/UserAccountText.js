import React from "react";
import PropTypes from "prop-types";
import { StyledUserAccountText } from "./UserAccountText.styles";
const UserAccountText = ({
  text = "text",
  isHeading = false,
  isUser = false,
  color = "black",
}) => {
  return (
    <StyledUserAccountText isHeading={isHeading} isUser={isUser} color={color}>
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
  color: PropTypes.string.isRequired,
  /** bool which decides about padding */
  isUser: PropTypes.bool.isRequired,
};

export default UserAccountText;
