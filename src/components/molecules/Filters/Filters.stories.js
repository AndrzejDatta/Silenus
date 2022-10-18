import React from 'react';
import { storiesName } from 'helpers/storiesName';
import FilterStories from 'components/atoms/Filter/Filter.stories';

export default {
  title: `${storiesName.molecules}FilterStories`,
  component: FilterStories,
  argTypes: {},
};

const Template = (args) => <FilterStories {...args} />;

export const Default = Template.bind({});

Default.args = {};
