import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const StyledIcon = styled.img`
  ${(props) => {
    if (props.size === 'small') {
      return `
            width: 24px;
            height: 24px; 
        `;
    } else if (props.size === 'medium') {
      return `
            width: 27px;
            height: 27px;
            `;
    }
  }};
  ${(props) => {
    if (props.color === 'black') {
      return `filter: ${theme.color.filterBlack}`;
    } else if (props.color === 'white') {
      return `filter: ${theme.color.filterWhite}`;
    }
  }};
  cursor: pointer;
`;
