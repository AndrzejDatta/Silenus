import styled from 'styled-components';

export const StyledTitle = styled.h1`
  ${({ pageType }) => {
    if (pageType === 'loginPage') {
      return `
        font-size: ${({ theme }) => theme.font.size.heading};
        color: white;
        `;
    } else if (pageType === 'startPage') {
      return `
        font-size: ${({ theme }) => theme.font.size.heading};
        color: ${({ theme }) => theme.color.fontGreen};
        `;
    }
  }}
  font-family: ${({ theme }) => theme.font.family.mitr};
  font-weight: 275;
`;
