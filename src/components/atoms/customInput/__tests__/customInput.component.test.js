import "jest-styled-components";
import renderer from "react-test-renderer";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
  it("Should change input value", async () => {
    render(
      <AppStyles>
        <CustomInput
          type={"text"}
          placeholder="Search..."
          color="black"
          size="small"
          fontSize="14px"
          isSearchBar={true}
          typing={() => jest.mock()}
        />
      </AppStyles>
    );

    const component = screen.getByPlaceholderText("Search...");
    fireEvent.change(component, { target: { value: "Silenus" } });
    await waitFor(() => {
      expect(component.value).toBe("Silenus");
    });
  });
});
