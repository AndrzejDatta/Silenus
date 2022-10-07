import styled from 'styled-components';

export const StyledInput = styled.input`
  ${({ color, fontSize }) => {
    return `color: ${color};
            font-size: ${fontSize};
            `;
  }};
  ${({ size }) => {
    if (size === 'medium') {
      return `
        width: 285px;
        height: 45px;
        line-height: 20px;
        `;
    }
  }};
  font-family: ${({ theme }) => theme.font.family.roboto};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.color.grey};
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  margin: 0;
  padding: 0;
`;
