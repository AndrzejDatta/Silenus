import React, { useContext } from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { dataContext } from "providers/DataProvider";
import Headline from "components/molecules/Headline/Headline";
import AddSection from "components/molecules/AddSection/AddSection";
const AddPot = (props) => {
  const {
    DodajDoniczke: { headings, returnPath },
  } = useContext(dataContext);

  console.log(returnPath);
  return (
    <MainTemplate inBackground>
      <Headline
        text={headings}
        isBackground
        icon
        isMyPots
        isReturn
        returnPath={returnPath}
      />
      <AddSection />
    </MainTemplate>
  );
};

AddPot.propTypes = {};

export default AddPot;
