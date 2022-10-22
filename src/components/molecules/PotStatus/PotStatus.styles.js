import styled from 'styled-components';

export const StyledPotStatus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 15px;
  padding: 15px;
  width: 90vw;
`;
export const StyledPotStatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
`;
export const StyledPotStatusText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 2px 0px;
`;
