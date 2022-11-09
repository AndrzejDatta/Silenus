import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 100%;
  background-color: "white";
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  &:focus {
    outline: none;
  }
`;
