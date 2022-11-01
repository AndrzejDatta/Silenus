import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen, rerender } from "@testing-library/react";
import Subtitle from "components/atoms/Subtitle/Subtitle";

describe("test Title component", () => {
  it("test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <Subtitle />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("color", "white");
  });
  if (
    ("Test Title component in loginPage",
    () => {
      render(
        <AppStyles>
          <Subtitle pageType="loginPage" subtitle="smart plants" />
        </AppStyles>
      );
      expect(screen.getByText(/Sielnus/i)).toHaveStyleRule("color", "white");
    })
  );
  if (
    ("Test Title component in startPage",
    () => {
      render(
        <AppStyles>
          <Subtitle pageType="startPage" subtitle="Silenus" />
        </AppStyles>
      );
      expect(screen.getByText(/Sielnus/i)).toHaveStyleRule("color", "#3AA688");
    })
  );
});
