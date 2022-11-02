import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/molecules/Navbar/Navbar";
import {
  StyledMainTemplate,
  StyledGradientCircle,
} from "./MainTemplate.styles";
import Icon from "components/atoms/icon/icon.component";
import leaf from "assets/icons/leaf.svg";

const MainTemplate = ({
  children,
  inBackground,
  isIdentifyPlant,
  isDetailsPage,
}) => {
  return (
    <StyledMainTemplate
      isIdentifyPlant={isIdentifyPlant}
      isDetailsPage={isDetailsPage}
    >
      {inBackground && <StyledGradientCircle />}
      {isIdentifyPlant && (
        <>
          <Icon
            icon={leaf}
            size="great"
            color="lightGreen"
            locationLeaftInBackground={4}
          />
          <Icon
            icon={leaf}
            size="big"
            color="lightGreen"
            locationLeaftInBackground={3}
          />
          <Icon
            icon={leaf}
            size="large"
            color="lightGreen"
            locationLeaftInBackground={2}
          />
          <Icon
            icon={leaf}
            size="great"
            color="lightGreen"
            locationLeaftInBackground={1}
          />
        </>
      )}
      {children}

      {!isDetailsPage && <Navbar />}
    </StyledMainTemplate>
  );
};

MainTemplate.propTypes = {
  inBackground: PropTypes.bool,
};

export default MainTemplate;
