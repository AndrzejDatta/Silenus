import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
export const AppStyles = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
