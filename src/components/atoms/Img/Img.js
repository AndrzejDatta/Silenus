import React from "react";
import PropTypes from "prop-types";
import { StyledImg } from "./Img.styles";
import img from "assets/images/mobile/plant.png";
const Img = ({ url = { img }, size, dataId }) => {
  return <StyledImg url={img} size={size} alt="img" data-cy={dataId} />;
};

Img.propTypes = {
  /**url of image */
  url: PropTypes.string.isRequired,
  /**size of  image */
  size: PropTypes.string.isRequired,
};

export default Img;
