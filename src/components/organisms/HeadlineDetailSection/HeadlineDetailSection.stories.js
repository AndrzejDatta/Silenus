import React from "react";
import { storiesName } from "helpers/storiesName";
import HeadlineDetailSection from "./HeadlineDetailSection";
import { MemoryRouter } from "react-router-dom";

export default {
  title: `${storiesName.organisms}HeadlineDetailSection`,
  component: HeadlineDetailSection,
};

const Template = (args) => (
  <MemoryRouter>
    <HeadlineDetailSection {...args} />
  </MemoryRouter>
);
export const Default = Template.bind({});

Default.args = {
  url: "",
  headline: "Headline",
  filterText: "filterText",
};
