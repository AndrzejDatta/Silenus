import React from "react";
import { storiesName } from "helpers/storiesName";
import Date from "./Date";

export default {
  title: `${storiesName.atoms}Date`,
  component: Date,
};

const Template = (args) => <Date {...args} />;

export const Default = Template.bind({});

Default.args = {
  dayName: "Mon",
  dayNumber: 1,
};
