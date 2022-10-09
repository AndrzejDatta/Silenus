import styled from "styled-components";

export const StyledUserImg = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%; ;
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
            width:160px;
            height:160px;
            border: 2px solid ;
            border: 2px solid rgba(66, 166, 134,1);
            `;
      }
      case 2: {
        return `
            width:180px;
            height:180px;
            border: 2px solid rgba(66, 166, 134,0.4);
            `;
      }
      case 3: {
        return `
            width:200px;
            height:200px;
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
