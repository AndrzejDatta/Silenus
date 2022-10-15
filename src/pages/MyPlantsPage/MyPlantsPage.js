import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PlantSection from "components/organisms/PlantSection/PlantSection";
const MyPlantsPage = (props) => {
  return (
    <MainTemplate>
      <PlantSection headline={"Moje rośliny"} isMyPots />
    </MainTemplate>
  );
};

MyPlantsPage.propTypes = {};

export default MyPlantsPage;
