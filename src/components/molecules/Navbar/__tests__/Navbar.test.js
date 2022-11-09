import React from "react";
import Icon from "components/atoms/icon/icon.component";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Test Navbar Component", () => {
  it("test defaut style", () => {
    const tree = renderer
      .create(
        <AppStyles>
          <Navbar />
        </AppStyles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    screen.debug();
  });
});
