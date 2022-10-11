import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Icon from "components/atoms/icon/icon.component";
import { dataContext } from "providers/DataProvider";
import { StyledNavbar } from "./Navbar.styles";
const Navbar = (props) => {
  const [color, setColor] = useState("black");

  function changeColor() {
    console.log("zmieniam kolor");
    if (color === "black") {
      setColor("green");
    } else if (color === "green") {
      setColor("black");
    }
  }
  const {
    navIcons,
    Navbar: { src },
  } = useContext(dataContext);
  const navElements = src?.map((item) => {
    return (
      <Icon
        icon={navIcons[item]}
        size="medium"
        color={color}
        click={changeColor}
      />
    );
  });
  return <StyledNavbar>{navElements}</StyledNavbar>;
};

Navbar.propTypes = {};

export default Navbar;
