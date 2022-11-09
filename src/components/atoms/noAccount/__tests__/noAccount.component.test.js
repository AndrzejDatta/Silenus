import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import NoAccount from "components/atoms/noAccount/noAccount.component";

describe("Test noAcconut.component Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <NoAccount />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-size", "14px");
    expect(tree).toHaveStyleRule("color", "black");
  });
});
