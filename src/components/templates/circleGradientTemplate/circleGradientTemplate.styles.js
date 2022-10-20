import styled from "styled-components";

export const StyledCircleGradientTemplate = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledGradientCircle = styled.div`
  z-index: -1;
  position: absolute;
  height: 150vw;
  width: 200vw;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(0deg, #42a686 12.36%, #5a92cb 100%);
`;
