import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen, rerender } from "@testing-library/react";
import Logo from "../Logo";

describe("Test Logo Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <Logo />
        </AppStyles>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("width", "150px");
  });
});
