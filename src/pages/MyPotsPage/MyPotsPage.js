import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PotSection from "components/organisms/PotSection/PotSection";
const MyPots = (props) => {
  return (
    <MainTemplate inBackground={true}>
      <PotSection headline={"Dodaj doniczki"} />
    </MainTemplate>
  );
};

MyPots.propTypes = {};

export default MyPots;
