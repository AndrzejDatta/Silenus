import React from 'react';
import { storiesName } from 'helpers/storiesName';
import HeadlineText from './HeadlineText';

export default {
  title: `${storiesName.atoms}HeadlineText`,
  component: HeadlineText,
  argTypes: {},
};

const Template = (args) => <HeadlineText {...args} />;

export const Default = Template.bind({});

Default.args = {};
