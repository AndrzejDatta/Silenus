import styled from "styled-components";

export const StyledSubtitle = styled.h1`
  font-size: ${(props) =>
    props.size === "startPage"
      ? ({ theme }) => theme.font.size.subtitle
      : ({ theme }) => theme.font.size.big};
  color: ${(props) =>
    props.color === "startPage"
      ? ({ theme }) => theme.color.fontGreen
      : "black"};
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;
