import React from "react";
import UserAccount from "pages/UserAccount/UserAccount";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}UserAccount`,
  component: UserAccount,
};
const Template = (args) => (
  <MemoryRouter>
    <UserAccount {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
