import styled from 'styled-components';

export const StyledNoAccountContainer = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  color: ${(color) => color};
  font-family: ${({ theme }) => theme.font.family.poppins};
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 20px;
  letter-spacing: 0.01em;
`;

export const StyledNoAccountButton = styled.a`
  margin-left: 5px;
  font-weight: 600;
  cursor: pointer;
`;
