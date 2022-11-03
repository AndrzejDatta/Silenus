import React from "react";
import { storiesName } from "helpers/storiesName";
import UserActivitiesSection from "./UserActivitiesSection";
import { MemoryRouter } from "react-router-dom";
export default {
  title: `${storiesName.organisms}UserActivitiesSection`,
  component: UserActivitiesSection,
  argTypes: {},
};

const Template = (args) => (
  <MemoryRouter>
    <UserActivitiesSection {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  headline: "Headline",
  isCalendarPage: false,
  icon: "",
  path: "/dashbaord",
};
