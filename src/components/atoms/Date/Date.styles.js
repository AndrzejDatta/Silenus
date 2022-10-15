import styled from "styled-components";

export const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 8px;
  width: 40px;
`;
export const StyledDateText = styled.p`
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${(props) =>
    props.isClicked ? "white" : ({ theme }) => theme.color.fontGreen};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${(props) => (props.isNumber ? "bold" : "normal")};
`;
