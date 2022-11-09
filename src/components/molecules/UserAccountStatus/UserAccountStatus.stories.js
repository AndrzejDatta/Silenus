import React from "react";
import UserAccountStatus from "components/molecules/UserAccountStatus/UserAccountStatus";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.molecules}UserAccountStatus`,
  component: UserAccountStatus,
};
const Template = (args) => <UserAccountStatus {...args} />;

export const Default = Template.bind({});

Default.args = {};
