import "jest-styled-components";
import renderer from "react-test-renderer";
import React from "react";
import CustomButton from "components/atoms/customButton/customButton.component";
import { render, screen } from "@testing-library/react";
import { AppStyles } from "providers/AppStyles";

describe("Test CustomButton component", () => {
  it("test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <CustomButton text="Text" />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("background-color", "green");
  });
  it("check text in button after rendere", () => {
    render(
      <AppStyles>
        <CustomButton text="test" fontSize="60px" />
      </AppStyles>
    );
    expect(screen.getByRole("button", { name: /test/i })).toHaveStyleRule(
      "font-size",
      "60px"
    );
  });
});
