import React from 'react';
import { storiesName } from 'helpers/storiesName';
import MyPlant from './MyPlant';

export default {
  title: `${storiesName.molecules}MyPlant`,
  component: MyPlant,
  argTypes: {},
};

const Template = (args) => <MyPlant {...args} />;

export const Default = Template.bind({});

Default.args = {};
