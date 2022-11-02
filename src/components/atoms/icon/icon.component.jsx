import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './icon.styles';
import plant from 'assets/icons/categoryIcons/plant.svg'

const Icon = ({ icon, size, color,click,isSearchBar,isOnRightSide , locationLeaftInBackground}) => {
  return <StyledIcon src={icon} size={size} color={color} onClick={click} isSearchBar={isSearchBar} isOnRightSide={isOnRightSide} locationLeaftInBackground={locationLeaftInBackground}/>;
};

Icon.defaultProps = {

  size: 'small',
  color:'green',
  icon: plant,
  isSearchBar:false,
  isOnRightSide:false,
  locationLeaftInBackground:1,
  click:()=>{},
};

Icon.propTypes = {
  /**size of text inSubtitle atom*/
  size: PropTypes.string.isRequired,
  /**color of Subtitle atom*/
  color: PropTypes.string.isRequired,
  /** icon svg injection*/
  icon: PropTypes.string.isRequired,
  /**bool which decides about be or not to be magnifier in input  */
  isSearchBar:PropTypes.bool,
  /**bool which decides about position item (right-of-way position )  */
  isOnRightSide:PropTypes.bool,
  /** number which describes locationLeaftInBackground of leaf in background*/
  locationLeaftInBackground:PropTypes.number,
  /** function use for example in arrow to navigate, use in onClick event */
  click:PropTypes.func,
};

export default Icon;
