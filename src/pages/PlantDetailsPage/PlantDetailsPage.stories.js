import React from "react";
import PlantDetailsPage from "pages/PlantDetailsPage/PlantDetailsPage";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}PlantDetailsPage`,
  component: PlantDetailsPage,
};
const Template = (args) => (
  <MemoryRouter>
    <PlantDetailsPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
