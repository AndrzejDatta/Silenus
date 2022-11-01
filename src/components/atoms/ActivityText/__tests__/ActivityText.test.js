import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import ActivityText from "../ActivityText";
import { render, screen, rerender } from "@testing-library/react";

describe("Test ActivityText component", () => {
  it("snapshot - default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <ActivityText />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-weight", "normal");
    expect(tree).toHaveStyleRule("color", "black");
    expect(tree).toHaveStyleRule("font-size", "14px");
  });
  it("snapshot - headline", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <ActivityText isHeadline={true} />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-weight", "bold");
    expect(tree).toHaveStyleRule("font-size", "16px");
  });

  // it("test render text", () => {
  //   render(
  //     <AppStyles>
  //       <ActivityText text="Test" />
  //     </AppStyles>
  //   );

  //   screen.debug();
  //   const component = screen.getByText(/test/i);
  //   expect(component).toHaveStyle(`color: "black" `);
  // });
});
