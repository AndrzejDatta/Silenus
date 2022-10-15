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
    } else if (props.size === "big") {
      return `
            width:66px;
            height:68px;
            position:absolute;
            `;
    } else if (props.size === "large") {
      return `
            width:86px;
            height:89px;
            position:absolute;
            `;
    } else if (props.size === "great") {
      return `
            width:158px;
            height:164px;
            position:absolute;
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
    } else if (props.color === "lightGreen") {
      return `filter: ${theme.color.filterLightGreen}`;
    }
  }};
  ${(props) => {
    switch (props.location) {
      case 1:
        return `
        top:20%;
        left:-13%;
        `;

      case 2:
        return `
        top:60%;
        left:10%;
        transform: scaleX(-1);
        `;
      case 3:
        return `
        top:15%;
        right:10%;
        
        `;
      case 4:
        return `
        top:50%;
        right:-15%;
        transform: scaleX(-1);
        `;
      default:
    }
    if (props.location === 1) {
      return `
      top:20%;
      left:-5%;
      
      `;
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
