import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.molecules}ToggleSwitch`,
  component: ToggleSwitch,
};
const Template = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

Default.args = {};
