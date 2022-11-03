import React from "react";
import MyPlantsPage from "pages/MyPlantsPage/MyPlantsPage";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}MyPlantsPage`,
  component: MyPlantsPage,
};
const Template = (args) => (
  <MemoryRouter>
    <MyPlantsPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
