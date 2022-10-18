import React, { useContext } from 'react';
import { dataContext } from 'providers/DataProvider';
import UserAccountText from 'components/atoms/UserAccountText/UserAccountText';
import Icon from 'components/atoms/icon/icon.component';
import {
  StyledUserAccountOptions,
  StyledUserAccountOptionsSection,
} from './UserAccountOptions.styles';

const UserAccountOptions = (props) => {
  const {
    KontoUżytkownika: { options, headings },
    images,
  } = useContext(dataContext);
  const optionsElement = options?.map(({ option, iconSrc }, index) => {
    if (option === 'Wyloguj się') {
      return (
        <StyledUserAccountOptions key={index}>
          <Icon icon={images[iconSrc]} size="tiny" color="black" />
          <UserAccountText
            text={option}
            isLogout={true}
            isHeading={false}
            isOption={false}
          />
        </StyledUserAccountOptions>
      );
    } else {
      return (
        <StyledUserAccountOptions key={index + 'a'}>
          <Icon icon={images[iconSrc]} size="tiny" color="green" />
          <UserAccountText
            text={option}
            isLogout={false}
            isHeading={false}
            isOption={true}
          />
        </StyledUserAccountOptions>
      );
    }
  });
  const headingElements = headings?.map((item, index) => {
    return (
      <UserAccountText
        key={index}
        text={item}
        isLogout={false}
        isHeading={true}
        isOption={false}
        isUser={true}
      />
    );
  });
  optionsElement.splice(0, 0, headingElements[0]);
  optionsElement.splice(3, 0, headingElements[1]);

  return (
    <StyledUserAccountOptionsSection>
      {optionsElement}
    </StyledUserAccountOptionsSection>
  );
};

export default UserAccountOptions;
