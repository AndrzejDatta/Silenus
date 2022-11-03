import React from "react";
import IdentifyPage from "pages/IdentifyPage/IdentifyPage";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}IdentifyPage`,
  component: IdentifyPage,
};
const Template = (args) => (
  <MemoryRouter>
    <IdentifyPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
