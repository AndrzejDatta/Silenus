import React from 'react';
import { storiesName } from 'helpers/storiesName';
import UserAccountInfo from './UserAccountInfo';

export default {
  title: `${storiesName.organisms}UserAccountInfo`,
  component: UserAccountInfo,
  argTypes: {},
};

const Template = (args) => <UserAccountInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};
