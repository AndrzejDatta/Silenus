import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: ${(props) =>
    props.size === "startPage"
      ? ({ theme }) => theme.font.size.title
      : ({ theme }) => theme.font.size.heading};
  color: ${(props) =>
    props.color === "startPage"
      ? ({ theme }) => theme.color.fontGreen
      : "black"};
  font-family: ${({ theme }) => theme.font.family.mitr};
`;
