import styled from 'styled-components';

export const StyledUserAccountStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.lightGreen};
  padding: 3vw;
  gap: 2vh;
`;

export const StyledUserAccountStatusSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:first-child {
    border-right: 2px solid ${({ theme }) => theme.color.fontGreen};
  }
  text-align: center;
`;
export const StyledUserAccountSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2vh;
`;
export const StyledUserAccountName = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
