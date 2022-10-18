import React from 'react';
import { storiesName } from 'helpers/storiesName';
import PotSection from './PotSection';

export default {
  title: `${storiesName.organisms}PotSection`,
  component: PotSection,
  argTypes: {},
};

const Template = (args) => <PotSection {...args} />;

export const Default = Template.bind({});

Default.args = {};
