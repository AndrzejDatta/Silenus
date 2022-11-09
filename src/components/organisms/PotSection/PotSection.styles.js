import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledPotSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  height: 40%;
  width: 90%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
