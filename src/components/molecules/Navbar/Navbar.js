import React, { useContext, useCallback } from "react";
import Icon from "components/atoms/icon/icon.component";
import { dataContext } from "providers/DataProvider";
import { StyledNavbar, StyledNavbarElement } from "./Navbar.styles";
const Navbar = () => {
  const { navIconsColor, changeColor, navIcons } = useContext(dataContext);

  const navElements = navIconsColor?.map(({ name, src, isClicked }, index) => {
    return (
      <StyledNavbarElement
        key={index}
        to={name === "plant" ? "/dashboard" : `/${name}`}
      >
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

export default Navbar;
