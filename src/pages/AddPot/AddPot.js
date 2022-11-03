import React, { useContext } from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { dataContext } from "providers/DataProvider";
import Headline from "components/molecules/Headline/Headline";
import AddSection from "components/molecules/AddSection/AddSection";
const AddPot = (props) => {
  const {
    DodajDoniczke: { headings, returnPath },
  } = useContext(dataContext);

  return (
    <MainTemplate isStyledBackground>
      <Headline
        text={headings}
        isHeadlineTextOnBackground
        icon
        isMyPots
        isPossibleToReturn
        returnPath={returnPath}
      />
      <AddSection />
    </MainTemplate>
  );
};

export default AddPot;
