import React from 'react';
import { storiesName } from 'helpers/storiesName';
import UserActivitiesSection from './UserActivitiesSection';

export default {
  title: `${storiesName.organisms}UserActivitiesSection`,
  component: UserActivitiesSection,
  argTypes: {},
};

const Template = (args) => <UserActivitiesSection {...args} />;

export const Default = Template.bind({});

Default.args = {};
