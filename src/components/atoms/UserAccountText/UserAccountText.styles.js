import styled from "styled-components";

export const StyledUserAccountText = styled.p`
  letter-spacing: 1px;
  line-height: 20px;
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${(props) =>
    props.isHeading || props.isOption
      ? ({ theme }) => theme.color.fontGreen
      : "black"};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${(props) => (props.isHeading ? "bold" : "normal")};
  padding: ${(props) =>
    props.isUser ? (props.isHeading ? " 0" : "0px 8px") : "0 0 0 10px"}; ;
`;
