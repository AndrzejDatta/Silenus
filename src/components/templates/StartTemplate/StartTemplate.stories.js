import React from "react";
import { storiesName } from "helpers/storiesName";
import StartTemplate from "./StartTemplate";

export default {
  title: `${storiesName.templates}StartTemplate`,
  component: StartTemplate,
  argTypes: {
    logoSize: {
      options: ["tiny", "small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => <StartTemplate {...args} />;

export const Default = Template.bind({});

Default.args = {
  pageType: "startPage",
  logoColor: "green",
};
