import React from 'react';
import googleIcon from 'assets/icons/google.svg';
import { IconButton } from './iconButton.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: IconButton,
};

export const Google = () => <IconButton />;
