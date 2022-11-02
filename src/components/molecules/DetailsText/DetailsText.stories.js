import React from "react";
import { storiesName } from "helpers/storiesName";
import DetailsText from "./DetailsText";

export default {
  title: `${storiesName.molecules}DetailsText`,
  component: DetailsText,
  argTypes: {},
};

const Template = (args) => <DetailsText {...args} />;

export const Default = Template.bind({});

Default.args = {};
