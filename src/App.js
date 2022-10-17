import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Dashboard';
import IdentifyPage from 'pages/IdentifyPage/IdentifyPage';
import UserAccount from 'pages/UserAccount/UserAccount';
import Calendar from 'pages/Calendar/Calendar';
const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/camera" element={<IdentifyPage />} />
        <Route path="/user" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
