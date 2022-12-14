import React from "react";
import PropTypes from "prop-types";
import HeadlineText from "components/atoms/HeadlineText/HeadlineText";
import { StyledHeadline } from "./Headline.styles";
import arrow from "assets/icons/arrow green.svg";
import plus from "assets/icons/plus.svg";
import returnSvg from "assets/icons/return.svg";
import Link from "components/atoms/Link/Link";
const Headline = ({
  text,
  isHeadlineTextOnBackground,
  isMyPotsPage,
  icon,
  isPossibleToReturn,
  path,
  returnPath,
}) => {
  return (
    <StyledHeadline>
      {isPossibleToReturn && (
        <Link
          icon={returnSvg}
          color={isHeadlineTextOnBackground ? "white" : "green"}
          size="tiny"
          path={returnPath}
        />
      )}
      <HeadlineText
        text={text}
        isHeadlineTextOnBackground={isHeadlineTextOnBackground}
      />
      {icon && (
        <Link
          icon={isMyPotsPage ? plus : arrow}
          color={isHeadlineTextOnBackground ? "white" : "green"}
          size="tiny"
          path={path}
        />
      )}
    </StyledHeadline>
  );
};

Headline.defaultProps = {
  text: "text",
  isHeadlineTextOnBackground: false,
  isMyPotsPage: false,
  icon: false,
  isPossibleToReturn: false,
  returnPath: "/dashboard",
};

Headline.propTypes = {
  /** text in headline*/
  text: PropTypes.string.isRequired,
  /**color of text */
  isHeadlineTextOnBackground: PropTypes.bool,
  /**bool which decides about svg (arrow or plus) */
  isMyPotsPage: PropTypes.bool,
  /**icon in headline */
  icon: PropTypes.bool,
  /**bool decides about showing return arrow */
  isPossibleToReturn: PropTypes.bool,
  /**path to return to page */
  returnPath: PropTypes.string,
};

export default Headline;
