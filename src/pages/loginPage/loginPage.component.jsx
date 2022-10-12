import LoginInterface from 'components/organisms/loginInterface/loginInterface.component';
import React from 'react';
import StartTemplate from 'components/templates/StartTemplate/StartTemplate';
const LoginPage = () => {
  return (
  
      <StartTemplate pageType="loginPage" logoColor='white' >
      <LoginInterface />
      </StartTemplate>
   
  );
};

export default LoginPage;
