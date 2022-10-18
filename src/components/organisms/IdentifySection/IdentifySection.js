import React, { useContext } from 'react';
import { dataContext } from 'providers/DataProvider';
import { StyledIndentifySection, StyledCircle } from './IdentifySection.styles';
import camera from 'assets/icons/navIcons/camera.svg';
import Icon from 'components/atoms/icon/icon.component';
import UserAccountText from 'components/atoms/UserAccountText/UserAccountText';
import CustomButton from 'components/atoms/customButton/customButton.component';
const IdentifySection = (props) => {
  const {
    ZidentyfikujRośline: { headings, buttonText },
  } = useContext(dataContext);
  return (
    <StyledIndentifySection>
      <UserAccountText
        text={headings[0]}
        isHeading={false}
        isLogout={false}
        isOption={true}
      />
      <StyledCircle number={3}>
        <StyledCircle number={2}>
          <StyledCircle number={1}>
            <Icon icon={camera} color="green" size="cameraBig" />
          </StyledCircle>
        </StyledCircle>
      </StyledCircle>
      <CustomButton
        size="small"
        text={buttonText}
        backgroundColor={'#42A686'}
        color="white"
        fontSize="20px"
        type="submit"
      />
    </StyledIndentifySection>
  );
};

export default IdentifySection;
