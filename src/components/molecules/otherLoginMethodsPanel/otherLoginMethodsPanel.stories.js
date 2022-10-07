import React from 'react';
import { storiesName } from 'helpers/storiesName';
import OtherLoginMethodsPanel from './otherLoginMethodsPanel.component';

export default {
  title: `${storiesName.molecules}OtherLoginMethodsPanel`,
  component: OtherLoginMethodsPanel,
  argTypes: {},
};

const Template = (args) => <OtherLoginMethodsPanel {...args} />;

export const Default = Template.bind({});

Default.args = {};
