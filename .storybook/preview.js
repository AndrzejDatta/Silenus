import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { DataProvider } from "providers/DataProvider";
import { AppStyles } from "providers/AppStyles";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AppStyles>
      <DataProvider>
        <Story />
      </DataProvider>
    </AppStyles>
  ),
];
