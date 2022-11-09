import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import StartTemplate from "components/templates/StartTemplate/StartTemplate";

const StartPage = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }, []);

  return (
    <StartTemplate pageType="startPage" logoColor="green" logoSize="small" />
  );
};

StartPage.propTypes = {};

export default StartPage;
