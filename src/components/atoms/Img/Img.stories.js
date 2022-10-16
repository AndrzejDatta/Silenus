import React from "react";
import Img from "./Img";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}Img`,
  component: Img,
  argTypes: {
    size: {
      options: ["tiny", "small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Img {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "small",
};
