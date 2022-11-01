import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen } from "@testing-library/react";
import HeadlineText from "components/atoms/HeadlineText/HeadlineText";

describe("Test HeadlineText Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <HeadlineText />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("color", "#3AA688");
  });
  it("Test HeadlineText Component when text is on colorful background", () => {
    render(
      <AppStyles>
        <HeadlineText isHeadlineTextOnBackground />
      </AppStyles>
    );
    expect(screen.getByText("Headline")).toHaveStyleRule("color", "white");
  });
  it("Test setting text in HeadlineText Component", () => {
    render(
      <AppStyles>
        <HeadlineText text="Test" />
      </AppStyles>
    );
    expect(screen.getByText("Test")).toHaveStyleRule("color", "#3AA688");
  });
});
