import styled from "styled-components";

export const StyledIndentifySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const StyledCircle = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    switch (props.number) {
      case 1: {
        return `
            width:74px;
            height:74px;
            border: 2px solid ;
            border: 2px solid rgba(66, 166, 134,1);
            `;
      }
      case 2: {
        return `
            width:83px;
            height:83px;
            border: 2px solid rgba(66, 166, 134,0.4);
            `;
      }
      case 3: {
        return `
            width:92px;
            height:92px;
            border: 2px solid rgba(66, 166, 134,0.1);
            `;
      }
      default: {
        return `
        color:red;
        `;
      }
    }
  }};
`;
