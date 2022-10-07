import React from 'react';
import { storiesName } from 'helpers/storiesName';
import LoginPanel from './loginPanel.component';

export default {
  title: `${storiesName.molecules}LoginPanel`,
  component: LoginPanel,
  argTypes: {},
};

const Template = (args) => <LoginPanel {...args} />;

export const Default = Template.bind({});

Default.args = {};
