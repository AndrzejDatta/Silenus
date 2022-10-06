import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.width,
    height: window.height,
  });
  useEffect(() => {
    window.addEventListener(
      "resize",
      setDimensions({
        width: window.width,
        height: window.height,
      })
    );
  }, []);
  return <div></div>;
};

useWindowDimensions.propTypes = {};

export default useWindowDimensions;
