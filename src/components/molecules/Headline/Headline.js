import React from "react";
import PropTypes from "prop-types";
import Icon from "components/atoms/icon/icon.component";
import HeadlineText from "components/atoms/HeadlineText/HeadlineText";
import { StyledHeadline } from "./Headline.styles";
import arrow from "assets/icons/arrow green.svg";
import plus from "assets/icons/plus.svg";
const Headline = ({ text = "text", isBackground, isMyPots, icon }) => {
  return (
    <StyledHeadline>
      <HeadlineText text={text} isBackground={isBackground} />
      {icon && (
        <Icon
          icon={isMyPots ? plus : arrow}
          color={isBackground ? "white" : "green"}
          size="tiny"
        />
      )}
    </StyledHeadline>
  );
};

Headline.propTypes = {
  text: PropTypes.string.isRequired,
  isBackground: PropTypes.bool,
  isMyPots: PropTypes.bool,
};

export default Headline;
