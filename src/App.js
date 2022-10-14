import React from "react";
import PropTypes from "prop-types";
import StartPage from "pages/StartPage/StartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "pages/loginPage/loginPage.component";
import Img from "components/atoms/Img/Img";
import PotSection from "components/organisms/PotSection/PotSection";
import UserActivity from "components/molecules/UserActivity/UserActivity";
import PotStatus from "components/molecules/PotStatus/PotStatus";
import UserAccount from "pages/UserAccount/UserAccount";
import Filter from "components/atoms/Filter/Filter";
import Filters from "components/molecules/Filters/Filters";
import facebookIcon from "assets/icons/facebook.svg";
import ActivityText from "components/atoms/ActivityText/ActivityText";
import UserActivitiesSection from "components/organisms/UserActivitiesSection/UserActivitiesSection";
import Dashboard from "pages/Dashboard/Dashboard";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
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
    <MyPotsPage />
  );
};

App.propTypes = {};

export default App;
