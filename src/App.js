import React, { Suspense } from "react";
import PropTypes from "prop-types";
import StartPage from "pages/StartPage/StartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "pages/loginPage/loginPage.component";
import Dashboard from "pages/Dashboard/Dashboard";
import IdentifyPage from "pages/IdentifyPage/IdentifyPage";
import UserAccount from "pages/UserAccount/UserAccount";
import Calendar from "pages/Calendar/Calendar";
import MyPlantsPage from "pages/MyPlantsPage/MyPlantsPage";
import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
import PotDetailsPage from "pages/PotDetailsPage/PotDetailsPage";
import PlantDetailsPage from "pages/PlantDetailsPage/PlantDetailsPage";
import AddPot from "pages/AddPot/AddPot";
// const AddPot = React.lazy(() => import("pages/AddPot/AddPot"));
// const MyPlantsPage = React.lazy(() => import("pages/MyPotsPage/MyPotsPage"));
// const MyPotsPage = React.lazy(() => import("pages/MyPotsPage/MyPotsPage"));
// const PotDetailsPage = React.lazy(() =>
//   import("pages/PotDetailsPage/PotDetailsPage")
// );
// const PlantDetailsPage = React.lazy(() =>
//   import("pages/PlantDetailsPage/PlantDetailsPage")
// );

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
