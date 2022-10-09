import React from 'react';
import { storiesName } from 'helpers/storiesName';
import LoginPage from './loginPage.component';

export default {
  title: `${storiesName.pages}LoginPage`,
  component: LoginPage,
  argTypes: {},
};

const Template = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
