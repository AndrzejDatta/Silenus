import React from 'react';
import { storiesName } from 'helpers/storiesName';
import SearchBar from './SearchBar';

export default {
  title: `${storiesName.molecules}SearchBar`,
  component: SearchBar,
  argTypes: {},
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
