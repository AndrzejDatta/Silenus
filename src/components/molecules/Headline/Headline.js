import React from "react";
import PropTypes from "prop-types";

import HeadlineText from "components/atoms/HeadlineText/HeadlineText";
import { StyledHeadline } from "./Headline.styles";
import arrow from "assets/icons/arrow green.svg";
import plus from "assets/icons/plus.svg";
import returnSvg from "assets/icons/return.svg";
import Link from "components/atoms/Link/Link";
const Headline = ({
  text = "text",
  isBackground,
  isMyPots,
  icon,
  isReturn,
  path,
  returnPath,
}) => {
  return (
    <StyledHeadline>
      {isReturn && (
        <Link
          icon={returnSvg}
          color={isBackground ? "white" : "green"}
          size="tiny"
          path={returnPath}
        />
      )}
      <HeadlineText text={text} isBackground={isBackground} />
      {icon && (
        <Link
          icon={isMyPots ? plus : arrow}
          color={isBackground ? "white" : "green"}
          size="tiny"
          path={path}
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
