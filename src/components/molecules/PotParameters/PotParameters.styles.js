import styled from "styled-components";

export const StyledPotDetailSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};
`;

export const StyledPotDetailsTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
`;
