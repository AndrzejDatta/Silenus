import React from 'react';
import { storiesName } from 'helpers/storiesName';
import Icon from './icon.component';
import google from 'assets/icons/google.svg';
import apple from 'assets/icons/apple.svg';
import facebook from 'assets/icons/facebook.svg';

export default {
  title: `${storiesName.atoms}Icon`,
  component: Icon,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    color: {
      options: ['black', 'white'],
      control: { type: 'radio' },
    },
    icon: {
      options: { google, apple, facebook },
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'black',
  size: 'small',
  icon: google,
};
