import React from "react";
import FilteredItem from "./FilteredItem";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}FilteredItem`,
  component: FilteredItem,
};

const Template = (args) => <FilteredItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  filteredText: "FilteredText",
};
