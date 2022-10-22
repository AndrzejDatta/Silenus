import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  justify-self: center;
  position: fixed;
  width: 100vw;
  height: 5%;
  bottom: 0%;
  background-color: #fff;
`;
export const StyledNavbarElement = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-self: flex-end;
`;
