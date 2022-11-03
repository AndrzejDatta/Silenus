import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import useWindowDimensions from "hooks/useWindowDimensions";
import { StyledStartTemplate } from "./StartTemplate.styles";
import StartPageHeader from "components/organisms/StartPageHeader/StartPageHeader";
const StartTemplate = ({ children, pageType, logoColor, logoSize }) => {
  const { width } = useWindowDimensions();

  const {
    StartPage: { title, subtitle },
    NotFoundPage: { headline, textInfo },
  } = useContext(dataContext);

  return (
    <StyledStartTemplate pageType={pageType}>
      <StartPageHeader
        logoSize={logoSize}
        pageType={pageType}
        logoColor={logoColor}
        title={pageType === "notFoundPage" ? headline : title}
        subtitle={pageType === "notFoundPage" ? textInfo : subtitle}
      />
      {children}
    </StyledStartTemplate>
  );
};

StartTemplate.defaultProps = {
  pageType: "startPage",
  logoColor: "green",
  logoSize: "small",
};

StartTemplate.propTypes = {
  /**children */
  children: PropTypes.node.isRequired,
  /**type of rendered page */
  pageType: PropTypes.string,
  /**color of svg  */
  logoColor: PropTypes.string,
  /**size of svg  */
  logoSize: PropTypes.string,
};

export default StartTemplate;
