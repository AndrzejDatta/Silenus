import styled from "styled-components";

export const StyledMainTemplate = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 20px 10px 0px 10px;

  ${(props) => {
    if (props.isDetailsPage) {
      return `
      padding: 0px;
      justify-content: flex-start;
      `;
    } else {
      return `
      padding: 20px 10px 0px 10px;
      `;
    }
  }};
`;

export const StyledGradientCircle = styled.div`
  position: absolute;
  height: 150vw;
  width: 200vw;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(0deg, #42a686 12.36%, #5a92cb 100%);
`;
