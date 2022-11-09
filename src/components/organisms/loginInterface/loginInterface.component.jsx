import LoginPanel from 'components/molecules/loginPanel/loginPanel.component';
import OtherLoginMethodsPanel from 'components/molecules/otherLoginMethodsPanel/otherLoginMethodsPanel.component';
import React from 'react';
import { StyledLoginInterfaceContainer } from './loginInterface.styles';

const LoginInterface = () => {
  return (
    <StyledLoginInterfaceContainer>
      <LoginPanel />
      <OtherLoginMethodsPanel />
    </StyledLoginInterfaceContainer>
  );
};

export default LoginInterface;
