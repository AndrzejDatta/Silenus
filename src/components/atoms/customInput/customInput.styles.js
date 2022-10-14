import styled from "styled-components";

export const StyledInput = styled.input`
  ${({ color, fontSize }) => {
    return `color: ${color};
            font-size: ${fontSize};
            `;
  }};
  ${({ size }) => {
    if (size === "medium") {
      return `
        width: 285px;
        height: 45px;
        line-height: 20px;
        `;
    } else if (size === "small") {
      return `
        width: 285px;
        height: 35px;
        line-height: 20px;
        `;
    }
  }};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 10px;

  ${({ isSearchBar }) => {
    if (isSearchBar) {
      return `
        background-color: #f9f9f9;
        text-align:left;
        display:flex;
        justify-content-space-between;
        color:red;
        height: 35px;
        `;
    } else {
      return `
      text-align: center;
      `;
    }
  }}
`;
