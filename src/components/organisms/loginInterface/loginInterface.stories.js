import React from 'react';
import { storiesName } from 'helpers/storiesName';
import LoginInterface from './loginInterface.component';

export default {
  title: `${storiesName.organisms}LoginInterface`,
  component: LoginInterface,
  argTypes: {},
};

const Template = (args) => <LoginInterface {...args} />;

export const Default = Template.bind({});

Default.args = {};
