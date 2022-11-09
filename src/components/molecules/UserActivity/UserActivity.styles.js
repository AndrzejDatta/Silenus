import styled from 'styled-components';

export const StyledUserActivity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 15px;
  padding: 10px;
  width: 100%;
  height: 11vh;
`;

export const StyledUserActivityInfo = styled.div`
  display: flex;
  flex-direction: ${({ isActivity }) => (isActivity ? 'row' : 'column')};
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  /* background-color: red; */
  gap: 1vh;
`;

export const StyledUserActivityInfoSection = styled.div`
  display: flex;
  flex-direction: ${({ isActivity }) => (isActivity ? 'row' : 'column')};
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
`;
export const StyledUserActivityText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 0px;
  width: 100%;
  justify-content: space-between;
  /* background-color: green; */
`;

export const StyledUserActivityEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background-color: yellow; */
`;
