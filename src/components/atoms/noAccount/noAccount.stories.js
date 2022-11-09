import React from 'react';
import { storiesName } from 'helpers/storiesName';
import NoAccount from './noAccount.component';

export default {
  title: `${storiesName.atoms}NoAccount`,
  component: NoAccount,
  argTypes: {
    fontSize: {
      options: ['18px', '16px', '14px', '12px'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <NoAccount {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'black',
  text: 'Default text',
  buttonText: 'DefaultButton',
  fontSize: '14px',
};
