import React from "react";
import StartPageText from "./StartPageText";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.molecules}StartPageText`,
  component: StartPageText,
};
const Template = (args) => <StartPageText {...args} />;

export const Default = Template.bind({});

Default.args = {
  startPage: "startPage",
};
