import React from "react";
import PropTypes from "prop-types";
import StartTemplate from "components/templates/StartTemplate/StartTemplate";
const StartPage = (props) => {
  return (
    <StartTemplate pageType="startPage" logoColor="green" logoSize="small" />
  );
};

StartPage.propTypes = {};

export default StartPage;
