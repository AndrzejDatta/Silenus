import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import { StyledIndentifySection, StyledCircle } from "./IdentifySection.styles";
import camera from "assets/icons/navIcons/camera.svg";
import Icon from "components/atoms/icon/icon.component";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import CustomButton from "components/atoms/customButton/customButton.component";
const IdentifySection = (props) => {
  const {
    ZidentyfikujRośline: { headings, buttonText },
    categoryIcons,
  } = useContext(dataContext);
  return (
    <StyledIndentifySection>
      <UserAccountText text={headings[0]} isHeading />
      <StyledCircle number={3}>
        <StyledCircle number={2}>
          <StyledCircle number={1}>
            <Icon icon={camera} color="green" size="medium" />
          </StyledCircle>
        </StyledCircle>
      </StyledCircle>
      <CustomButton
        size="small"
        text={buttonText}
        backgroundColor={"#42A686"}
        color="white"
        fontSize="20px"
      />
    </StyledIndentifySection>
  );
};

IdentifySection.propTypes = {};

export default IdentifySection;
