import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen } from "@testing-library/react";
import Link from "components/atoms/Link/Link";
import { MemoryRouter } from "react-router-dom";

describe("Test Link Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <MemoryRouter>
            <Link />
          </MemoryRouter>
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
