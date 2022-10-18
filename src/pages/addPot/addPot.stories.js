import React from 'react';
import { storiesName } from 'helpers/storiesName';
import AddPot from './addPot.component';

export default {
  title: `${storiesName.pages}AddPot`,
  component: AddPot,
  argTypes: {},
};

const Template = (args) => <AddPot {...args} />;

export const Default = Template.bind({});

Default.args = {};
