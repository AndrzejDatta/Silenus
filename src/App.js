import React from 'react';
import PropTypes from 'prop-types';
import StartPage from 'pages/StartPage/StartPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from 'pages/loginPage/loginPage.component';

const App = (props) => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" to={<StartPage />} />
    //   </Routes>
    // </BrowserRouter>
    // <StartPage />
    <LoginPage />
  );
};

App.propTypes = {};

export default App;
