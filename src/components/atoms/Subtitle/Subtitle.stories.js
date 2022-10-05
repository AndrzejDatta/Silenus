import React from "react";
import Subtitle from "components/atoms/Subtitle/Subtitle";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}SubtTitle`,
  component: Subtitle,
};
const Template = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
  subtitle: "Title",
  size: "startPage",
};
