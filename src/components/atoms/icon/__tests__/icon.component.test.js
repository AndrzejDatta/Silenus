import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen } from "@testing-library/react";
import Icon from "components/atoms/icon/icon.component";

describe("Test Icon Component", () => {
  it("Test default stye", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <Icon />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("width", "24px");
  });
});
