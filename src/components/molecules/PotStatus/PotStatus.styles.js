import styled from "styled-components";

export const StyledPotStatus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 15px;
`;
export const StyledPotStatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
