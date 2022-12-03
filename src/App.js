import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import StartPage from "pages/StartPage/StartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "pages/loginPage/loginPage.component";
// import Dashboard from "pages/Dashboard/Dashboard";
import IdentifyPage from "pages/IdentifyPage/IdentifyPage";
import UserAccount from "pages/UserAccount/UserAccount";
import Calendar from "pages/Calendar/Calendar";
import MyPlantsPage from "pages/MyPlantsPage/MyPlantsPage";
import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
import PotDetailsPage from "pages/PotDetailsPage/PotDetailsPage";
import PlantDetailsPage from "pages/PlantDetailsPage/PlantDetailsPage";
import AddPot from "pages/AddPot/AddPot";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
const Dashboard = lazy(() => import("pages/Dashboard/Dashboard"));

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="mypots">
            <Route index element={<MyPotsPage />} />
            <Route path="addpot" element={<AddPot />} />
          </Route>
          <Route path="myplants" element={<MyPlantsPage />} />
          <Route path="potdetails" element={<PotDetailsPage />} />
          <Route path="plantdetails" element={<PlantDetailsPage />} />
        </Route>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/camera" element={<IdentifyPage />} />
        <Route path="/user" element={<UserAccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
