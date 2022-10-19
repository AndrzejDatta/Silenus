import React from "react";
import PropTypes from "prop-types";
import StartPage from "pages/StartPage/StartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "pages/loginPage/loginPage.component";
import Dashboard from "pages/Dashboard/Dashboard";
import AddPot from "pages/AddPot/AddPot";
import IdentifyPage from "pages/IdentifyPage/IdentifyPage";
import UserAccount from "pages/UserAccount/UserAccount";
import Calendar from "pages/Calendar/Calendar";
import MyPlantsPage from "pages/MyPlantsPage/MyPlantsPage";
import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
import PotDetailsPage from "pages/PotDetailsPage/PotDetailsPage";
const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/camera" element={<IdentifyPage />} />
        <Route path="/user" element={<UserAccount />} />
        <Route path="/mypots" element={<MyPotsPage />} />
        <Route path="/myplants" element={<MyPlantsPage />} />
        <Route path="/addpot" element={<AddPot />} />
        <Route path="/potdetails" element={<PotDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
