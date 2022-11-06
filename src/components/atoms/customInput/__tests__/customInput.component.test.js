import "jest-styled-components";
import renderer from "react-test-renderer";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AppStyles } from "providers/AppStyles";
import CustomInput from "components/atoms/customInput/customInput.component";

describe("Test CustomInput Component", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <CustomInput />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
