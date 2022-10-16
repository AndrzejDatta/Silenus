import styled from "styled-components";

export const StyledPotStatus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 15px;
  padding: 10px;
`;
export const StyledPotStatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 45%;
`;
export const StyledPotStatusText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 0px;
`;
