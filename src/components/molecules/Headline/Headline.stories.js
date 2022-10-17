import React from 'react';
import { storiesName } from 'helpers/storiesName';
import Headline from './Headline';

export default {
  title: `${storiesName.molecules}Headline`,
  component: Headline,
  argTypes: {},
};

const Template = (args) => <Headline {...args} />;

export const Default = Template.bind({});

Default.args = {};
