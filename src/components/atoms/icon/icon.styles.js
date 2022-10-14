import { theme } from "assets/styles/theme";
import styled from "styled-components";

export const StyledIcon = styled.img`
  ${(props) => {
    if (props.size === "small") {
      return `
            width: 24px;
            height: 24px; 
        `;
    } else if (props.size === "medium") {
      return `
            width: 27px;
            height: 27px;
            `;
    } else if (props.size === "tiny") {
      return `
            width: 22px;
            height:22px;
            `;
    }
  }};
  ${(props) => {
    if (props.color === "black") {
      return `filter: ${theme.color.filterBlack}`;
    } else if (props.color === "white") {
      return `filter: ${theme.color.filterWhite}`;
    } else if (props.color === "green") {
      return `filter: ${theme.color.filterGreen}`;
    }
  }};
  ${(props) => {
    if (props.isSearchBar && props.isRight) {
      return `
      position:absolute;
      right:10px;
      top:50%;
      transform:translateY(-50%);
      `;
    } else if (props.isSearchBar) {
      return `
     position:absolute;
     left:10px;
     top:50%;
     transform:translateY(-50%);
      
      `;
    }
  }};
  cursor: pointer;
`;
