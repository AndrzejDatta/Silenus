import React from "react";
import Title from "components/atoms/Title/Title";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.atoms}Title`,
  component: Title,
};
const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
  title: "Title",
  size: "startPage",
};
