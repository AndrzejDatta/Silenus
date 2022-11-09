import { ReactComponent as logo } from "assets/icons/logo.svg";
import styled from "styled-components";

export const StyledLogo = styled(logo)`
  ${(props) => {
    if (props.logoSize === "tiny") {
      return `
            width:60px;
            height:60px;
            `;
    } else if (props.logoSize === "small") {
      return `
            width:150px;
            height:150px;
            `;
    } else if (props.logoSize === "medium") {
      return `
            width:200px;
            height:200px;
            `;
    } else if (props.logoSize === "large") {
      return `
            width:250px;
            height:250px;
            `;
    }
  }}
`;
