import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/molecules/Navbar/Navbar";
import { StyledMainTemplate } from "./MainTemplate.styles";

const MainTemplate = ({ children, inBackground }) => {
  return (
    <StyledMainTemplate inBackground={inBackground}>
      {children}
      <Navbar />
    </StyledMainTemplate>
  );
};

MainTemplate.propTypes = {
  inBackground: PropTypes.bool,
};

export default MainTemplate;
