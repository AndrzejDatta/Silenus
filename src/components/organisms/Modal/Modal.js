import React from "react";
import PropTypes from "prop-types";
import { ModalWrapper } from "components/organisms/Modal/Modal.styles";
import CustomButton from "components/atoms/customButton/customButton.component";

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <CustomButton
        type="button"
        size="small"
        text={"Zamknij"}
        color="#3AA688"
        backgroundColor="#EEF6F4"
        fontSize="14px"
        click={handleClose}
      />
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
