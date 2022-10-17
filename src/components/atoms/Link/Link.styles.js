import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "assets/styles/theme";

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
    } else if (props.size === "cameraBig") {
      return `
            width:60px;
            height:35px;
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
        left:-17%;
        `;

      case 2:
        return `
        top:47%;
        left:0%;
        transform: scaleX(-1);
        `;
      case 3:
        return `
        top:15%;
        right:3%;
        
        `;
      case 4:
        return `
        top:43%;
        right:-20%;
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

export const StyledLinkElement = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-self: flex-end;
  padding: 5px 0px;
`;
