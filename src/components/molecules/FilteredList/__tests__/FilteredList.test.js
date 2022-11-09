import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { AppStyles } from "providers/AppStyles";
import FilteredItem from "components/atoms/FilteredItem/FilteredItem";
import { StyledFilteredList } from "../FilteredList.styles";
import { render, screen } from "@testing-library/react";

describe("Test FilteredList Component", () => {
  it("Test search algorithm", async () => {
    const plants = [
      {
        id: "3121",
        genus: "Begonia",
        species: "",
        cultivar: "Whopper Red with Bronze Leaf",
        common: "Whopper Red with Bronze Leaf Begonia",
      },
      {
        id: "6351",
        genus: "Chamerion",
        species: "latifolium",
        cultivar: "",
        common: "Dwarf Fireweed",
      },
      {
        id: "6352",
        genus: "Chamerion",
        species: "angustifolium",
        cultivar: "",
        common: "Fireweed",
      },
      {
        id: "6353",
        genus: "Chamerion",
        species: "latifolium",
        cultivar: "",
        common: "Dwarf Fireweed",
      },
    ];

    const searchElementsByCommon = plants?.map(({ common }, index) => {
      if (common.toLowerCase().includes("fir".toLowerCase())) {
        return <FilteredItem filteredText={common} key={index} />;
      }
    });

    render(
      <AppStyles>
        <StyledFilteredList index={1}>
          {searchElementsByCommon}
        </StyledFilteredList>
      </AppStyles>
    );

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
    expect(items.length).not.toBe(0);
  });
});
