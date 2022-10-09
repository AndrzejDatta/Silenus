import LoginInterface from 'components/organisms/loginInterface/loginInterface.component';
import StartPageHeader from 'components/organisms/StartPageHeader/StartPageHeader';
import React from 'react';
import { StyledLoginPageContainer } from './loginPage.styles';

const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      <StartPageHeader pageType="loginPage" logoColor="white" logoSize="tiny" />
      <LoginInterface />
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
