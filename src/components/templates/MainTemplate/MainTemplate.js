import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/molecules/Navbar/Navbar";
import { StyledMainTemplate } from "./MainTemplate.styles";
import UserAccountInfo from "components/organisms/UserAccountInfo/UserAccountInfo";
import UserAccountOptions from "components/molecules/UserAccountOptions/UserAccountOptions";
const MainTemplate = ({ children }) => {
  return (
    <StyledMainTemplate>
      {children}
      <Navbar />
    </StyledMainTemplate>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
