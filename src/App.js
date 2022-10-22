import React, { Suspense } from "react";
import PropTypes from "prop-types";
import StartPage from "pages/StartPage/StartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "pages/loginPage/loginPage.component";
import Dashboard from "pages/Dashboard/Dashboard";
import IdentifyPage from "pages/IdentifyPage/IdentifyPage";
import UserAccount from "pages/UserAccount/UserAccount";
import Calendar from "pages/Calendar/Calendar";
// import MyPlantsPage from "pages/MyPlantsPage/MyPlantsPage";
// import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
// import PotDetailsPage from "pages/PotDetailsPage/PotDetailsPage";
// import PlantDetailsPage from "pages/PlantDetailsPage/PlantDetailsPage";
const AddPot = React.lazy(() => import("pages/AddPot/AddPot"));
const MyPlantsPage = React.lazy(() => import("pages/MyPotsPage/MyPotsPage"));
const MyPotsPage = React.lazy(() => import("pages/MyPotsPage/MyPotsPage"));
const PotDetailsPage = React.lazy(() =>
  import("pages/PotDetailsPage/PotDetailsPage")
);
const PlantDetailsPage = React.lazy(() =>
  import("pages/PlantDetailsPage/PlantDetailsPage")
);

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/camera" element={<IdentifyPage />} />
        <Route path="/user" element={<UserAccount />} />
        {/* <Route path="/mypots" element={<MyPotsPage />} />
        <Route path="/myplants" element={<MyPlantsPage />} /> */}
        <Route
          path="/addpot"
          element={
            <Suspense fallback={<div>Login</div>}>
              <AddPot />
            </Suspense>
          }
        />
        <Route
          path="/mypots"
          element={
            <Suspense fallback={<div>Login</div>}>
              <MyPotsPage />
            </Suspense>
          }
        />
        <Route
          path="/myplants"
          element={
            <Suspense fallback={<div>Login</div>}>
              <MyPlantsPage />
            </Suspense>
          }
        />
        <Route
          path="/potdetails"
          element={
            <Suspense fallback={<div>Login</div>}>
              <PotDetailsPage />
            </Suspense>
          }
        />
        <Route
          path="/plantdetails"
          element={
            <Suspense fallback={<div>Login</div>}>
              <PlantDetailsPage />
            </Suspense>
          }
        />
        {/* <Route path="/potdetails" element={<PotDetailsPage />} /> */}
        {/* <Route path="/plantdetails" element={<PlantDetailsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
