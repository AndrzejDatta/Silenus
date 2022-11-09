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
  isStyledBackground,
  isIdentifyPlantPage,
  isDetailsPage,
}) => {
  return (
    <StyledMainTemplate
      isIdentifyPlantPage={isIdentifyPlantPage}
      isDetailsPage={isDetailsPage}
    >
      {isStyledBackground && <StyledGradientCircle />}
      {isIdentifyPlantPage && (
        <>
          <Icon
            icon={leaf}
            size="great"
            color="lightGreen"
            locationLeaftisStyledBackground={4}
          />
          <Icon
            icon={leaf}
            size="big"
            color="lightGreen"
            locationLeaftisStyledBackground={3}
          />
          <Icon
            icon={leaf}
            size="large"
            color="lightGreen"
            locationLeaftisStyledBackground={2}
          />
          <Icon
            icon={leaf}
            size="great"
            color="lightGreen"
            locationLeaftisStyledBackground={1}
          />
        </>
      )}
      {children}

      {!isDetailsPage && <Navbar />}
    </StyledMainTemplate>
  );
};

MainTemplate.defaultProps = {
  isStyledBackground: false,
  isIdentifyPlantPage: false,
  isDetailsPage: false,
};

MainTemplate.propTypes = {
  /** children*/
  children: PropTypes.node.isRequired,
  /** bool which decides about be or not be rounded shape in background */
  isStyledBackground: PropTypes.bool,
  /** bool which says it is or isn't IndentifyPlantPage*/
  isIdentifyPlantPage: PropTypes.bool,
  /** bool which says it is or isn't DetailsPage*/
  isDetailsPage: PropTypes.bool,
};

export default MainTemplate;
