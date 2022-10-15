import React from 'react';
import { storiesName } from 'helpers/storiesName';
import CircleGradientTemplate from './circleGradientTemplate.component';

export default {
  title: `${storiesName.templates}CircleGradientTemplate`,
  component: CircleGradientTemplate,
  argTypes: {},
};

const Template = (args) => <CircleGradientTemplate {...args} />;

export const Default = Template.bind({});

Default.args = {};
