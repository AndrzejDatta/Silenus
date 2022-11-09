import React from "react";
import { storiesName } from "helpers/storiesName";
import UserImg from "./UserImg";

export default {
  title: `${storiesName.atoms}UserImg`,
  component: UserImg,
};

const Template = (args) => <UserImg {...args} />;

export const Default = Template.bind({});

Default.args = {};
