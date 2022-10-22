import styled from 'styled-components';

export const StyledPlantText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.font.size.small};
  position: fixed;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
`;
