import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StartTemplate from "components/templates/StartTemplate/StartTemplate";
import { useNavigate } from "react-router";
const NotFoundPage = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  }, []);
  return (
    <StartTemplate pageType="notFoundPage" logoColor="green" logoSize="small" />
  );
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
