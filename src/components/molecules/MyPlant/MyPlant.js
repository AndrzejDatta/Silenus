import React from "react";
import PropTypes from "prop-types";
import Img from "components/atoms/Img/Img";
import { StyledPlantText } from "./MyPlant.styles";
const MyPlant = ({ src, name = "Plant", dataId }) => {
  return (
    <Img url={src} size="small" dataId={dataId}>
      {/* <StyledPlantText>{name}</StyledPlantText> */}
    </Img>
  );
};

MyPlant.propTypes = {
  /**src of image */
  src: PropTypes.string,
  /**name of plant */
  name: PropTypes.string,
  /** identifier (need to cypress)*/
  dataId: PropTypes.string,
};

export default MyPlant;
