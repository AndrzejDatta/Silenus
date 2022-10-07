import React from 'react';
import PropTypes from 'prop-types';
import StartPage from 'pages/StartPage/StartPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" to={<StartPage />} />
    //   </Routes>
    // </BrowserRouter>
    <StartPage />
  );
};

App.propTypes = {};

export default App;
