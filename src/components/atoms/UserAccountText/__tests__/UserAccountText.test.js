import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen, rerender } from "@testing-library/react";
import UserAccountText from "../UserAccountText";

describe("Test UserAccountText component", () => {
  it("test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <UserAccountText />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-weight", "normal");
    expect(tree).toHaveStyleRule("padding", "0 0 0 10px");
  });

  it("test UserAccountText as Headline + User", () => {
    render(
      <AppStyles>
        <UserAccountText isHeading={true} isUseInUserAccountPage={true} />
      </AppStyles>
    );
    expect(screen.getByText(/text/i)).toHaveStyleRule("padding", "0");
    expect(screen.getByText(/text/i)).toHaveStyleRule("font-weight", "bold");
  });
});
