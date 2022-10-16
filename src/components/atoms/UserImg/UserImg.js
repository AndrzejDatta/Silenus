import React from "react";
import PropTypes from "prop-types";
import { StyledUserImg } from "./UserImg.styles";
import { StyledCircle } from "./UserImg.styles";
import userImg from "assets/images/mobile/userImg.png";

const UserImg = ({ url = userImg }) => {
  return (
    <>
      <StyledCircle number={3}>
        <StyledCircle number={2}>
          <StyledCircle number={1}>
            <StyledUserImg url={url} />
          </StyledCircle>
        </StyledCircle>
      </StyledCircle>
    </>
  );
};

UserImg.propTypes = {};
//TODO:dopisac Proptypes dla url, jak juz bedzie prawdziwy
export default UserImg;
