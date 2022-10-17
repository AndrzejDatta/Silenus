import React from 'react';
import { storiesName } from 'helpers/storiesName';
import PlantSection from './PlantSection';

export default {
  title: `${storiesName.organisms}PlantSection`,
  component: PlantSection,
  argTypes: {},
};

const Template = (args) => <PlantSection {...args} />;

export const Default = Template.bind({});

Default.args = {};
