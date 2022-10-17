import React from 'react';
import { storiesName } from 'helpers/storiesName';
import MainTemplate from './MainTemplate';

export default {
  title: `${storiesName.templates}MainTemplate`,
  component: MainTemplate,
  argTypes: {},
};

const Template = (args) => <MainTemplate {...args} />;

export const Default = Template.bind({});

Default.args = {};
