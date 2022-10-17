import styled from "styled-components";

export const StyledActivityText = styled.p`
  letter-spacing: 1px;
  font-size: ${(props) =>
    props.isHeadline
      ? ({ theme }) => theme.font.size.big
      : ({ theme }) => theme.font.size.medium};
  color: ${(props) => props.color};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${(props) => (props.isHeadline ? "bold" : "normal")};
`;
