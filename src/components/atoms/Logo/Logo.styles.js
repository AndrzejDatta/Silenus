import { ReactComponent as logo } from 'assets/icons/logo.svg';
import styled from 'styled-components';

export const StyledLogo = styled(logo)`
  ${(props) => {
    if (props.size === 'tiny') {
      return `
            width:60px;
            height:60px;
            `;
    } else if (props.size === 'small') {
      return `
            width:150px;
            height:150px;
            `;
    } else if (props.size === 'medium') {
      return `
            width:200px;
            height:200px;
            `;
    } else if (props.size === 'large') {
      return `
            width:250px;
            height:250px;
            `;
    }
  }}
`;
