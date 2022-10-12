import React from "react";
import { storiesName } from "helpers/storiesName";
import UserAccount from "./UserAccount";

export default {
  title: `${storiesName.pages}UserAccount`,
  component: UserAccount,
  argTypes: {},
};

const Template = (args) => <UserAccount {...args} />;

export const Default = Template.bind({});

Default.args = {};
