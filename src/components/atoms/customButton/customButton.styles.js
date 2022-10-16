import styled from "styled-components";

export const StyledButton = styled.button`
  ${({ size }) => {
    if (size === "medium") {
      return `
            width: 285px;
            height: 45px;
            `;
    } else if (size === "small") {
      return `
            width: 200px;
            height: 45px;
            `;
    }
  }}
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ theme }) => theme.font.family.poppins};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

//Tutaj teoretycznie jest możliwość stworzenia jeszcze większej customizacji,
//można dodać do tego więcej propsów i customować bordera np,
//na teraz jest hard code, ale można sie zastanowić nad refactorem
