import React from "react";
import StartPageHeader from "components/organisms/StartPageHeader/StartPageHeader";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.organisms}StartPageHeader`,
  component: StartPageHeader,
};
const Template = (args) => <StartPageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {};
