import React from "react";
import { storiesName } from "helpers/storiesName";
import MainTemplate from "./MainTemplate";
import { MemoryRouter } from "react-router-dom";
export default {
  title: `${storiesName.templates}MainTemplate`,
  component: MainTemplate,
  argTypes: {},
};

const Template = (args) => (
  <MemoryRouter>
    <MainTemplate {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
