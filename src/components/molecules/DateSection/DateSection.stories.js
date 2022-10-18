import React from 'react';
import { storiesName } from 'helpers/storiesName';
import DateSection from './DateSection';

export default {
  title: `${storiesName.molecules}DateSection`,
  component: DateSection,
  argTypes: {},
};

const Template = (args) => <DateSection {...args} />;

export const Default = Template.bind({});

Default.args = {};
