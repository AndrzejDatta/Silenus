import styled from "styled-components";

export const StyledStartTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100vh;

  ${(props) => {
    if (props.pageType === "loginPage") {
      return `
        gap: 10%;
        background-image: linear-gradient(0deg, #42a686 12.36%, #5a92cb 100%);
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 35%;
        `;
    } else if (props.pageType === "startPage") {
      return `
        
        padding-top: 100px;
        `;
    }
  }}
`;
