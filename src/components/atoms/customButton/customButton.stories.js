import React from 'react';
import { storiesName } from 'helpers/storiesName';
import CustomButton from './customButton.component';

export default {
  title: `${storiesName.atoms}CustomButton`,
  component: CustomButton,
  argTypes: {
    fontSize: {
      options: ['18px', '16px', '14px', '12px'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  fontSize: '14px',
  text: 'Zaloguj się',
  type: 'button',
  color: '#3AA688',
  backgroundColor: 'white',
};
