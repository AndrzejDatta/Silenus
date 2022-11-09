import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen, rerender } from "@testing-library/react";
import DateElement from "../DateElement";

describe("Test DateElement Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <DateElement />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("background-color", "#F9F9F9");
  });
  it("Test numbers style", () => {
    render(
      <AppStyles>
        <DateElement isNumber={true} dayNumber={14} />
      </AppStyles>
    );
    expect(screen.getByText(/14/i)).toHaveStyleRule("font-weight", "bold");
  });
});
