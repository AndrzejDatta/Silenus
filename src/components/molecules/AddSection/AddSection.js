import React, { useContext } from "react";
import PropTypes from "prop-types";
import { StyledAddSection } from "./AddSection.styles";
import { dataContext } from "providers/DataProvider";
import ActivityText from "components/atoms/ActivityText/ActivityText";
import CustomButton from "components/atoms/customButton/customButton.component";
const AddSection = (props) => {
  const {
    DodajDoniczke: { infoText, buttonText },
  } = useContext(dataContext);

  return (
    <StyledAddSection>
      <ActivityText text={infoText} color="white" />
      <CustomButton
        type="button"
        size="small"
        text={buttonText}
        color="#3AA688"
        backgroundColor="#EEF6F4"
        fontSize="14px"
      />
    </StyledAddSection>
  );
};

AddSection.propTypes = {};

export default AddSection;
