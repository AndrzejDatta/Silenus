import React from "react";
import Filter from "./Filter";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}Filter`,
  component: Filter,
  argTypes: {
    isBig: {
      options: [true, false],
      control: { type: "radio" },
    },
    isDashboard: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Filter {...args} />;

export const Default = Template.bind({});

Default.args = {
  isBig: true,
  isDashboard: true,
  text: "Filter",
};
