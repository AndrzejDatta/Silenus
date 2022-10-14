import styled from "styled-components";
import background from "assets/icons/background.svg";
export const StyledMainTemplate = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 20px 10px 0px 10px;

  ${(props) => {
    if (props.inBackground) {
      return `
        background-image: url(${background});
        background-repeat: no-repeat;
        `;
    } else {
      return `
      background-color:white;
      `;
    }
  }};
`;
