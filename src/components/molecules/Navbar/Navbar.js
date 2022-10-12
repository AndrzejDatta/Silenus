import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Icon from "components/atoms/icon/icon.component";
import { dataContext } from "providers/DataProvider";
import { StyledNavbar } from "./Navbar.styles";
const Navbar = (props) => {
  const { navIconsColor, changeColor } = useContext(dataContext);

  const { navIcons } = useContext(dataContext);
  const navElements = navIconsColor?.map(({ name, src, isClicked }) => {
    return (
      <Icon
        icon={navIcons[src]}
        size="medium"
        color={isClicked ? "green" : "black"}
        click={() => changeColor(name, src)}
      />
    );
  });
  return <StyledNavbar>{navElements}</StyledNavbar>;
};

Navbar.propTypes = {};

export default Navbar;
//TODO: zastawnoic sie czy jak oplote to Link to bedzie spoko
