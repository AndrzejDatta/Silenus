import React from "react";
import { storiesName } from "helpers/storiesName";
import PlantSection from "./PlantSection";
import { MemoryRouter } from "react-router-dom";
export default {
  title: `${storiesName.organisms}PlantSection`,
  component: PlantSection,
  argTypes: {},
};

const Template = (args) => (
  <MemoryRouter>
    <PlantSection {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  headline: "Headline",
  isMyPotsPage: false,
  isPossibleToReturn: false,
  path: "/dashboard",
};
