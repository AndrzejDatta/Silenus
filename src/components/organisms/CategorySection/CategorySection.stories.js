import React from 'react';
import { storiesName } from 'helpers/storiesName';
import CategorySection from './CategorySection';

export default {
  title: `${storiesName.organisms}CategorySection`,
  component: CategorySection,
  argTypes: {},
};

const Template = (args) => <CategorySection {...args} />;

export const Default = Template.bind({});

Default.args = {};
