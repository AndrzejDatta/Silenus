import styled from "styled-components";

export const StyledUserActivity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 15px;
  padding: 10px;
`;

export const StyledUserActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledUserActivityText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 0px;
`;
