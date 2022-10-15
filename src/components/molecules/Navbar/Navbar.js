import React, { useContext } from "react";
import PropTypes from "prop-types";
import Icon from "components/atoms/icon/icon.component";
import { dataContext } from "providers/DataProvider";
import { StyledNavbar, StyledNavbarElement } from "./Navbar.styles";
const Navbar = () => {
  const { navIconsColor, changeColor } = useContext(dataContext);

  const { navIcons } = useContext(dataContext);
  const navElements = navIconsColor?.map(({ name, src, isClicked }) => {
    return (
      <StyledNavbarElement to={name === "plant" ? "/" : `/${name}`}>
        <Icon
          icon={navIcons[src]}
          size="medium"
          color={isClicked ? "green" : "black"}
          click={() => changeColor(name, src)}
        />
      </StyledNavbarElement>
    );
  });
  return <StyledNavbar>{navElements}</StyledNavbar>;
};

Navbar.propTypes = {};

export default Navbar;
//TODO: zastawnoic sie czy jak oplote to Link to bedzie spoko
