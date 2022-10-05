import React from "react";
import PropTypes from "prop-types";
import Logo from "components/atoms/Logo/Logo";
import Title from "components/atoms/Title/Title";
const App = (props) => {
  return (
    <>
      <Title title="Title" color="startPage" size="startPage" />
      <Logo color="black" />
    </>
  );
};

App.propTypes = {};

export default App;
