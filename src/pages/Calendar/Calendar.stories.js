import React from "react";
import Calendar from "pages/Calendar/Calendar";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}Calendar`,
  component: Calendar,
};
const Template = (args) => (
  <MemoryRouter>
    <Calendar {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
