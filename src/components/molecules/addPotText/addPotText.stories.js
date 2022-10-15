import React from 'react';
import { storiesName } from 'helpers/storiesName';
import AddPotText from './addPotText.component';

export default {
  title: `${storiesName.molecules}AddPotText`,
  component: AddPotText,
  argTypes: {},
};

const Template = (args) => <AddPotText {...args} />;

export const Default = Template.bind({});

Default.args = {};
