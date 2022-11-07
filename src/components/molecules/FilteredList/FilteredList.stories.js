import React from "react";
import { storiesName } from "helpers/storiesName";
import FilteredList from "./FilteredList";

export default {
  title: `${storiesName.molecules}FilteredList`,
  component: FilteredList,
  argTypes: {},
};

const Template = (args) => <FilteredList {...args} />;

export const Default = Template.bind({});

Default.args = {
  plants: [
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
  ],
};
