import React from "react";
import PropTypes from "prop-types";
import Icon from "components/atoms/icon/icon.component";
import HeadlineText from "components/atoms/HeadlineText/HeadlineText";
import { StyledHeadline } from "./Headline.styles";
import arrow from "assets/icons/arrow_green.svg";
const Headline = ({ text, isBackground }) => {
  return (
    <StyledHeadline>
      <HeadlineText text={text} isBackground={isBackground} />
      <Icon icon={arrow} color={isBackground ? "white" : "green"} size="tiny" />
    </StyledHeadline>
  );
};

Headline.propTypes = {};

export default Headline;
