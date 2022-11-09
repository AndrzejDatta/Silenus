import React, { Suspense } from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PotSection from "components/organisms/PotSection/PotSection";
const MyPots = (props) => {
  return (
    <MainTemplate isStyledBackground={true}>
      <PotSection headline={"Dodaj doniczki"} isPossibleToReturn />
    </MainTemplate>
  );
};

MyPots.propTypes = {};

export default MyPots;
