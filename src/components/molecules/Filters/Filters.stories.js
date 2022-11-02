import React from "react";
import { storiesName } from "helpers/storiesName";
import Filters from "./Filters";
export default {
  title: `${storiesName.molecules}Filters`,
  component: Filters,
  argTypes: {
    isBigFontSize: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Filters {...args} />;

export const Default = Template.bind({});

Default.args = {
  filters: [
    {
      name: "Text",
      src: "",
    },
    {
      name: "Nawożenie",
      src: "",
    },
    {
      name: "Podlewanie",
      src: "",
    },
  ],
  color: "black",
  icons: [],
  isBigFontSize: false,
};

//TODO: nothing render, fix it
