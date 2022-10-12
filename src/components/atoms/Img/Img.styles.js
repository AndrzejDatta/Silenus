import styled from "styled-components";

export const StyledImg = styled.div`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  ${(props) => {
    if (props.logoSize === "tiny") {
      return `
            width:51px;
            height:51px;
            border-radius:8px;
            `;
    } else if (props.logoSize === "small") {
      return `
            width:128px;
            height:139px;
            border-radius:15px;
            `;
    } else if (props.logoSize === "medium") {
      return `
            width:160px;
            height:157px;
            border-radius:15px;
            `;
    } else if (props.logoSize === "large") {
      return `
            width:100%;
            height:250px; 
            `;
    }
  }}
`;
//TODO:ten large rozmiar trzeba pomyslec
