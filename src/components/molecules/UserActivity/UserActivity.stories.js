import React from 'react';
import { storiesName } from 'helpers/storiesName';
import UserActivity from './UserActivity';

export default {
  title: `${storiesName.molecules}UserActivity`,
  component: UserActivity,
  argTypes: {},
};

const Template = (args) => <UserActivity {...args} />;

export const Default = Template.bind({});

Default.args = {};
