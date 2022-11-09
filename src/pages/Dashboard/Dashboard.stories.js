import React from "react";
import Dashboard from "pages/Dashboard/Dashboard";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}Dashboard`,
  component: Dashboard,
};
const Template = (args) => (
  <MemoryRouter>
    <Dashboard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
