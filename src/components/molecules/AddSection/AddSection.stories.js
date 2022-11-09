import React from "react";
import { storiesName } from "helpers/storiesName";
import AddSection from "./AddSection";

export default {
  title: `${storiesName.molecules}AddSection`,
  component: AddSection,
  argTypes: {},
};

const Template = (args) => <AddSection {...args} />;

export const Default = Template.bind({});

Default.args = {};
