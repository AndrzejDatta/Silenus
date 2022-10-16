import React from 'react';
import PropTypes from 'prop-types';
import StartPage from 'pages/StartPage/StartPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from 'pages/loginPage/loginPage.component';
import Dashboard from 'pages/Dashboard/Dashboard';
import IdentifyPage from 'pages/IdentifyPage/IdentifyPage';
import UserAccount from 'pages/UserAccount/UserAccount';
const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<LoginPage />} />
        <Route path="/camera" element={<IdentifyPage />} />
        <Route path="/user" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
