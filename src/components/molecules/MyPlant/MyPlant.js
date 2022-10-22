import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/atoms/Img/Img';
import { StyledPlantText } from './MyPlant.styles';
const MyPlant = ({ src, name = 'Plant' }) => {
  return (
    <Img url={src} size="small">
      {/* <StyledPlantText>{name}</StyledPlantText> */}
    </Img>
  );
};

MyPlant.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

export default MyPlant;
