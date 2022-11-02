import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen } from "@testing-library/react";
import Filter from "components/atoms/Filter/Filter";

describe("Test Filter Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <Filter />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Test filter in UserActivity Section in Dashboard", () => {
    render(
      <AppStyles>
        <Filter isBigFontSize={true} color="#3AA688" />
      </AppStyles>
    );
    expect(screen.getByText("Filter")).toHaveStyleRule("font-size", "16px");
    expect(screen.getByText("Filter")).toHaveStyleRule("color", "#3AA688");
  });
});
