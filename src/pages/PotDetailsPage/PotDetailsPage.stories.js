import React from "react";
import PotDetailsPage from "pages/PotDetailsPage/PotDetailsPage";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}PotDetailsPage`,
  component: PotDetailsPage,
};
const Template = (args) => (
  <MemoryRouter>
    <PotDetailsPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
