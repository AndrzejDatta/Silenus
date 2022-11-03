import React from "react";
import AddPot from "pages/AddPot/AddPot";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}AddPot`,
  component: AddPot,
};
const Template = (args) => (
  <MemoryRouter>
    <AddPot {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
