import Subtitle from 'components/atoms/Subtitle/Subtitle';
import Title from 'components/atoms/Title/Title';
import { dataContext } from 'providers/DataProvider';
import React, { useContext } from 'react';
import { StyledAddPotText } from './addPotText.styles';

const AddPotText = () => {
  // debugger;
  const {
    DodajDoniczke: { infoText, headings },
  } = useContext(dataContext);

  console.log(infoText);
  console.log(headings);
  return (
    <StyledAddPotText>
      <Title title={headings} pageType="loginPage" />
      <Subtitle subtitle={infoText} pageType="loginPage" />
    </StyledAddPotText>
  );
};

export default AddPotText;
