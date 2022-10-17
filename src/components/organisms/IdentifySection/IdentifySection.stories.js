import React from 'react';
import { storiesName } from 'helpers/storiesName';
import IdentifySection from './IdentifySection';

export default {
  title: `${storiesName.organisms}IdentifySection`,
  component: IdentifySection,
  argTypes: {},
};

const Template = (args) => <IdentifySection {...args} />;

export const Default = Template.bind({});

Default.args = {};
