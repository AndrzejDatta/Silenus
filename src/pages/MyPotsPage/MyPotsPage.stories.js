import React from "react";
import MyPotsPage from "pages/MyPotsPage/MyPotsPage";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}MyPotsPage`,
  component: MyPotsPage,
};
const Template = (args) => (
  <MemoryRouter>
    <MyPotsPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
