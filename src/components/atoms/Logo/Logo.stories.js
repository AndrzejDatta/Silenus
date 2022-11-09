import React from "react";
import Logo from "components/atoms/Logo/Logo";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}Logo`,
  component: Logo,
  argTypes: {
    size: {
      options: ["tiny", "small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
  size: "small",
};
