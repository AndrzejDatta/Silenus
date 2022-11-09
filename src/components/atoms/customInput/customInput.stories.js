import React from 'react';
import { storiesName } from 'helpers/storiesName';
import CustomInput from './customInput.component';

export default {
  title: `${storiesName.atoms}CustomInput`,
  component: CustomInput,
  argTypes: {
    size: {
      options: ['medium'],
      control: { type: 'radio' },
    },
    type: {
      options: ['checkbox', 'password', 'email', 'search', 'button'],
      control: { type: 'radio' },
    },
    placeholder: {
      options: ['Login', 'Password', 'Search'],
      control: { type: 'radio' },
    },
    fontSize: {
      options: ['18px', '16px', '14px'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <CustomInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'black',
  size: 'small',
  type: 'email',
  placeholder: 'Login',
  fontSize: '14px',
};
