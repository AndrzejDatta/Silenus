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
        width: 35px;
        height: 22x;
        line-height: 20px;
        `;
    } else if (size === "tiny") {
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

  ${({ isToogle }) => {
    if (isToogle) {
      return `
    display: none;
            `;
    }
  }};
  
  isToogle
  ${({ isSearchBar }) => {
    if (isSearchBar) {
      return `
        background-color: white;
        text-align:left;
        display:flex;
        justify-content-space-between;
        color:black;
        height: 35px;
        border: 3px solid #F9F9F9;
        padding:0px 30px;
        `;
    } else {
      return `
      text-align: center;
      `;
    }
  }}
`;
