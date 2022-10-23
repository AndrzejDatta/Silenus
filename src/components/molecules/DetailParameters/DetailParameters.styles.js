import styled from 'styled-components';

export const StyledDetailSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};
`;

export const StyledDetailsTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  gap: 2vh;
  margin-bottom: 1vh;
`;
