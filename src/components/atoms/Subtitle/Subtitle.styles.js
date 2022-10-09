import styled from 'styled-components';

export const StyledSubtitle = styled.h2`
  ${({ pageType }) => {
    if (pageType === 'loginPage') {
      return `
        font-size: ${({ theme }) => theme.font.size.big};
        color: white;
        `;
    } else if (pageType === 'startPage') {
      return `
        font-size: ${({ theme }) => theme.font.size.subtitle};
        color: ${({ theme }) => theme.color.fontGreen};
        `;
    }
  }}
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 300;
`;
