import React from 'react';
import { StyledLoginPanelContainer } from './loginPanel.styles';
import CustomInput from 'components/atoms/customInput/customInput.component';
import CustomButton from 'components/atoms/customButton/customButton.component';

const LoginPanel = () => {
  return (
    <StyledLoginPanelContainer>
      <CustomInput
        type="email"
        placeholder="Login"
        color="#EEF6F4"
        size="medium"
        fontSize="14px"
      />
      <CustomInput
        type="password"
        placeholder="Hasło"
        color="#EEF6F4"
        size="medium"
        fontSize="14px"
      />
      <CustomButton
        type="button"
        size="medium"
        text="Zaloguj się"
        color="#3AA688"
        backgroundColor="#EEF6F4"
        fontSize="14px"
      />
    </StyledLoginPanelContainer>
  );
};

export default LoginPanel;
