import styled from "styled-components";

export const StyledFilter = styled.button`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 8px;
  min-width: 112px;
  margin: 0px 5px;
  max-width: 140px;
  ${({ isCategory }) => isCategory && `padding:5px 10px`}
`;

export const StyledFilterText = styled.p`
  font-size: ${(props) =>
    props.isBig
      ? ({ theme }) => theme.font.size.big
      : ({ theme }) => theme.font.size.medium};
  color: ${(props) =>
    props.isDashboard ? ({ theme }) => theme.color.fontGreen : "black"};
  font-family: ${({ theme }) => theme.font.family.poppins};
`;
