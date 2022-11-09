import styled from "styled-components";

export const StyledHeadlineText = styled.h1`
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.font.size.large};
  color: ${(props) =>
    props.isHeadlineTextOnBackground
      ? "white"
      : ({ theme }) => theme.color.fontGreen};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: normal;
`;
