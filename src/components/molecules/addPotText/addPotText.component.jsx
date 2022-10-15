import Subtitle from 'components/atoms/Subtitle/Subtitle';
import Title from 'components/atoms/Title/Title';
import { dataContext } from 'providers/DataProvider';
import React, { useContext } from 'react';

const AddPotText = () => {
  debugger;
  const {
    DodajDoniczke: { infoText, headings },
  } = useContext(dataContext);

  return (
    <AddPotText>
      <Title title={headings} pageType="loginPage" />
      <Subtitle subtitle={infoText} pageType="loginPage" />
    </AddPotText>
  );
};

export default AddPotText;
