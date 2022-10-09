import styled from "styled-components";

export const StyledUserAccountText = styled.p`
  ${({ isHeadling }) => {
    if (isHeadling) {
      return `
        letter-spacing:1px;
        line-height:20px;
        font-weight:273;
        font-size: ${({ theme }) => theme.font.size.big};
        color:${({ theme }) => theme.color.fontGreen} ;
        `;
    } else {
      return `
        font-size: ${({ theme }) => theme.font.size.big};
        color:${({ isLogout }) =>
          isLogout ? "black" : ({ theme }) => theme.color.fontGreen};
        letter-spacing:1%;
        line-height:20px;

        `;
    }
  }};
  font-family: ${({ theme }) => theme.font.family.poppins};
`;
