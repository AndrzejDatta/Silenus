import React from "react";
import Filter from "./Filter";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}Filter`,
  component: Filter,
  argTypes: {
    isBigFontSize: {
      options: [true, false],
      control: { type: "radio" },
    },
    isCategoryInIdentifyPage: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Filter {...args} />;

export const Default = Template.bind({});

Default.args = {
  isBigFontSize: true,
  text: "Filter",
  color: "black",
  isCategoryInIdentifyPage: false,
};
