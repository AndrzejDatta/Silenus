import React, { useContext } from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { dataContext } from "providers/DataProvider";
import Headline from "components/molecules/Headline/Headline";
import AddSection from "components/molecules/AddSection/AddSection";
const AddPot = (props) => {
  const {
    DodajDoniczke: { headings },
  } = useContext(dataContext);

  return (
    <MainTemplate isBackground>
      <Headline text={headings[0]} isBackground />
      <AddSection />
    </MainTemplate>
  );
};

AddPot.propTypes = {};

export default AddPot;
