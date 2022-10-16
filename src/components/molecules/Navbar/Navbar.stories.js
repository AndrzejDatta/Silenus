import React from "react";
import { storiesName } from "helpers/storiesName";
import Navbar from "./Navbar";

export default {
  title: `${storiesName.molecules}Navbar`,
  component: Navbar,
  argTypes: {},
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {};
