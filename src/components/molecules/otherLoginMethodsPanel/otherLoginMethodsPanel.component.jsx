import Icon from 'components/atoms/icon/icon.component';
import NoAccount from 'components/atoms/noAccount/noAccount.component';
import React from 'react';
import {
  StyledHr,
  StyledIconContainer,
  StyledOtherLoginMethodsPanel,
} from './otherLoginMethodsPanel.styles';
import googleIcon from 'assets/icons/google.svg';
import appleIcon from 'assets/icons/apple.svg';
import facebookIcon from 'assets/icons/facebook.svg';

const OtherLoginMethodsPanel = () => {
  const icons = [googleIcon, appleIcon, facebookIcon];
  return (
    <StyledOtherLoginMethodsPanel>
      <NoAccount
        text="Nie masz konta?"
        buttonText="Załóż konto"
        fontSize="12px"
        color="white"
      />
      <StyledHr />
      <StyledIconContainer>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} size="medium" color="white" />
        ))}
      </StyledIconContainer>
    </StyledOtherLoginMethodsPanel>
  );
};

export default OtherLoginMethodsPanel;
