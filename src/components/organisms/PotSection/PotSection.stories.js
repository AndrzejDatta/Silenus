import React from "react";
import { storiesName } from "helpers/storiesName";
import PotSection from "./PotSection";
import { MemoryRouter } from "react-router-dom";
export default {
  title: `${storiesName.organisms}PotSection`,
  component: PotSection,
  argTypes: {},
};

const Template = (args) => (
  <MemoryRouter>
    <PotSection {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  headline: "Headline",
  isPossibleToReturn: false,
  path: "/dashboard",
};
