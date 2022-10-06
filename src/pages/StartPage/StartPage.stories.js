import React from "react";
import StartPage from "pages/StartPage/StartPage";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.pages}StartPage`,
  component: StartPage,
};
const Template = (args) => <StartPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
