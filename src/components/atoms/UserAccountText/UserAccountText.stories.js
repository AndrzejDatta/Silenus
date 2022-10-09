import React from "react";
import { storiesName } from "helpers/storiesName";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";

export default {
  title: `${storiesName.atoms}UserAccountText`,
  component: UserAccountText,
  argTypes: {
    isHeadling: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isLogout: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => <UserAccountText {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Text",
  isHeadling: false,
  isLogout: false,
};
