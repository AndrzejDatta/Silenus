import React from "react";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { storiesName } from "helpers/storiesName";
import { MemoryRouter } from "react-router";
export default {
  title: `${storiesName.pages}NotFoundPage`,
  component: NotFoundPage,
};
const Template = (args) => (
  <MemoryRouter>
    <NotFoundPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {};
