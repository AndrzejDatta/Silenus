import React from "react";
import PropTypes from "prop-types";
import { StyledUserAccountText } from "./UserAccountText.styles";
const UserAccountText = ({
  text,
  isHeading,
  isUseInUserAccountPage,
  color,
}) => {
  return (
    <StyledUserAccountText
      isHeading={isHeading}
      isUseInUserAccountPage={isUseInUserAccountPage}
      color={color}
    >
      {text}
    </StyledUserAccountText>
  );
};
UserAccountText.defaultProps = {
  text: "text",
  isHeading: false,
  isUseInUserAccountPage: false,
  color: "black",
};
UserAccountText.propTypes = {
  /**text in UserAccount */
  text: PropTypes.string.isRequired,
  /** bool which decides about font-weight */
  isHeading: PropTypes.bool.isRequired,
  /** bool which decides about padding */
  isUseInUserAccountPage: PropTypes.bool.isRequired,
  /** bool which decides about color */
  color: PropTypes.string.isRequired,
};

export default UserAccountText;
