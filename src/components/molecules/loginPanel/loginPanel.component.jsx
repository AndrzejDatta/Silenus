import React from 'react';
import { StyledLoginPanelContainer } from './loginPanel.styles';
import CustomInput from 'components/atoms/customInput/customInput.component';
import CustomButton from 'components/atoms/customButton/customButton.component';

const LoginPanel = ({}) => {
  return (
    <StyledLoginPanelContainer>
      <CustomInput
        type="email"
        placeholder="Login"
        color={({ theme }) => theme.color.grey}
        size="medium"
      />
      <CustomInput
        type="password"
        placeholder="Hasło"
        color={({ theme }) => theme.color.grey}
        size="medium"
      />
      <CustomButton
        type="button"
        size="medium"
        text="Zaloguj się"
        color={({ theme }) => theme.color.fontGreen}
        backgroundColor={({ theme }) => theme.color.grey}
      />
    </StyledLoginPanelContainer>
  );
};

export default LoginPanel;
