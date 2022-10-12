import React from "react";
import { storiesName } from "helpers/storiesName";
import Icon from "./icon.component";
import google from "assets/icons/google.svg";
import apple from "assets/icons/apple.svg";
import facebook from "assets/icons/facebook.svg";
import pottedPlant from "assets/icons/navIcons/potted_plant.svg";
import camera from "assets/icons/navIcons/camera.svg";
import calendar from "assets/icons/navIcons/calendar.svg";
import accountCircle from "assets/icons/navIcons/accountCircle.svg";
export default {
  title: `${storiesName.atoms}Icon`,
  component: Icon,
  argTypes: {
    size: {
      options: ["tiny", "small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: ["black", "white", "green"],
      control: { type: "radio" },
    },
    icon: {
      options: {
        google,
        apple,
        facebook,
        pottedPlant,
        calendar,
        camera,
        accountCircle,
      },
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});

export const Navicon = Template.bind({});

Default.args = {
  color: "black",
  size: "small",
  icon: google,
  click: () => {
    console.log("clciked");
  },
};
Navicon.args = {
  ...Default.args,
  size: "tiny",
  icon: accountCircle,
};
//TODO:add click action
