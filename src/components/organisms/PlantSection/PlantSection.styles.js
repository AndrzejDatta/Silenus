import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledPlantSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 35vh;
`;

export const StyledPlantElementsSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
