import React from "react";
import UserAccountOptions from "./UserAccountOptions";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.molecules}UserAccuntOptions`,
  component: UserAccountOptions,
};
const Template = (args) => <UserAccountOptions {...args} />;

export const Default = Template.bind({});

Default.args = {};
