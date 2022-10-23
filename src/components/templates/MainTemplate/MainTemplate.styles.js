import styled from 'styled-components';

export const StyledMainTemplate = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
  position: relative;
  gap: 15px;
  /* ${(props) => {
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
  }}; */
`;

export const StyledGradientCircle = styled.div`
  z-index: -1;
  position: absolute;
  height: 150vw;
  width: 200vw;
  border-radius: 50%;
  transform: translate(-20%, -45%);
  background-image: linear-gradient(0deg, #42a686 12.36%, #5a92cb 100%);
  overflow: hidden;
`;
