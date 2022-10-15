import React from "react";
import PropTypes from "prop-types";
import StartPage from "pages/StartPage/StartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "pages/loginPage/loginPage.component";
import Dashboard from "pages/Dashboard/Dashboard";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
import MyPlantsPage from "pages/MyPlantsPage/MyPlantsPage";
const App = (props) => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" to={<StartPage />} />
    //   </Routes>
    // </BrowserRouter>
    //<StartPage />
    //<LoginPage />
    //<UserAccount />
    <MyPlantsPage />
    //<MyPotsPage />
  );
};

App.propTypes = {};

export default App;
