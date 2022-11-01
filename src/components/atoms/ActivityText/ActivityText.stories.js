import React from "react";
import { storiesName } from "helpers/storiesName";
import ActivityText from "./ActivityText";

export default {
  title: `${storiesName.atoms}ActivityText`,
  component: ActivityText,
  argTypes: {},
};

const Template = (args) => <ActivityText {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Text",
  isHeadline: false,
  color: "black",
};
