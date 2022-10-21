import React from "react";
import PropTypes from "prop-types";
import DetailsSection from "components/organisms/DetailsSection/DetailsSection";
import HeadlineDetailSection from "components/organisms/HeadlineDetailSection/HeadlineDetailSection";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
const PotDetailsPage = (props) => {
  return (
    <MainTemplate isDetailsPage>
      <HeadlineDetailSection />
      <DetailsSection isPlant />
    </MainTemplate>
  );
};

PotDetailsPage.propTypes = {};

export default PotDetailsPage;
