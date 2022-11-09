import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen, rerender } from "@testing-library/react";
import Title from "../Title";

describe("test Title component", () => {
  it("test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <Title />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("color", "#3AA688");
  });
  if (
    ("Test Title component in loginPage",
    () => {
      render(
        <AppStyles>
          <Title pageType="loginPage" title="Silenus" />
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
          <Title pageType="startPage" title="Silenus" />
        </AppStyles>
      );
      expect(screen.getByText(/Sielnus/i)).toHaveStyleRule("color", "#3AA688");
    })
  );
});
